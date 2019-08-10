import React, { useState, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { TextField } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import { CoverLoad } from "components/Loading";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  ProgramSelect,
  DegreeSelect,
  SkillsSelect,
  GenderSelect,
  StatusSelect
} from "components/CustomSelect/index.js";

const splitAndCapitalize = str =>
  str
    ? str
        .split("_")
        .map(x => x[0].toUpperCase() + x.slice(1))
        .join(" ")
    : "";

const SearchBar = ({ filters, handleChange, applyFilter }) => {
  const { containerAll } = useStyles();
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          applyFilter();
        }}
        className={containerAll}
      >
        <TextField
          variant="outlined"
          label="Name"
          inputProps={{ "aria-label": "Search" }}
          value={filters.job_title}
          onChange={e => handleChange("name")(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Experience"
          inputProps={{ "aria-label": "Search" }}
          value={filters.experience}
          onChange={e => handleChange("experience")(e.target.value)}
        />
        <TextField
          id="age-min"
          label="Min Age"
          value={filters.min_age}
          onChange={({ target: { value } }) => handleChange("min_age")(value)}
          variant="outlined"
          margin="normal"
          style={{ width: "50%" }}
          type="number"
          inputProps={{ min: "0", max: "100" }}
        />
        <TextField
          id="age-max"
          label="Max Age"
          value={filters.max_age}
          onChange={({ target: { value } }) => handleChange("max_age")(value)}
          variant="outlined"
          margin="normal"
          style={{ width: "50%" }}
          type="number"
          inputProps={{ min: "0", max: "100" }}
        />
        <ProgramSelect
          isMulti
          program={filters.program}
          handleChange={handleChange}
        />
        <DegreeSelect
          isMulti
          degree={filters.degree}
          handleChange={handleChange}
        />
        <SkillsSelect
          isMulti
          skills={filters.skills}
          handleChange={handleChange}
        />

        <GenderSelect
          isMulti
          gender={filters.gender}
          handleChange={handleChange}
        />
        <StatusSelect
          isMulti
          status={filters.status}
          handleChange={handleChange}
        />
        <input type="submit" style={{ display: "none" }} />
      </form>
    </div>
  );
};

const headRows = [
  { id: "name", numeric: false, disablePadding: true, label: "Applicant Name" },
  {
    id: "applied_date",
    numeric: false,
    disablePadding: false,
    label: "Applied Date"
  },
  { id: "status", numeric: false, disablePadding: false, label: "Status" }
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "Select all desserts" }}
          />
        </TableCell>
        {headRows.map(row => (
          <TableCell
            key={row.id}
            align={row.numeric ? "right" : "left"}
            padding={row.disablePadding ? "none" : "default"}
            sortDirection={orderBy === row.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === row.id}
              direction={order}
              onClick={createSortHandler(row.id)}
            >
              {row.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  spacer: {
    flex: "1 1 100%"
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    flex: "0 0 auto"
  }
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected, toggleFilter } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle">
            Applicants
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <div style={{ display: "flex" }}>
            <Tooltip title="Approve">
              <IconButton aria-label="Delete">
                <CheckIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Reject">
              <IconButton aria-label="Delete">
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </div>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list" onClick={toggleFilter}>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "1200px",
    marginTop: theme.spacing(3),
    margin: "0 auto",
    display: "flex",
    flexDirection: "column"
  },
  paper: {
    width: "100%",
    position: "relative",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  tableWrapper: {
    overflowX: "auto"
  },
  containerAll: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      flexGrow: 1,
      margin: "10px",
      maxWidth: 600,
      minWidth: "200px"
    }
  }
}));

export default function EnhancedTable({ job_id }) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [per_page, setPerPage] = React.useState(5);
  const [meta, setMeta] = React.useState({
    total: 100,
    per_page: 10,
    page: 1
  });

  const [fetching, setFetching] = useState(false);
  const [data, setData] = useState([]);
  const [showFilter, setShowFilter] = React.useState(false);
  const [filters, setFilters] = React.useState({
    name: "",
    program: [],
    degree: [],
    skills: [],
    gender: [],
    experience: 0,
    min_age: 0,
    max_age: 100,
    status: []
  });

  const fetchApplications = () => {
    setFetching(true);
    return axios
      .get(`api/v1/applicant/${job_id}`, {
        params: { ...filters, page, per_page }
      })
      .then(res => res.data)
      .then(res => {
        console.log(res);
        setData(res.data);
        setMeta(res.meta);
      })
      .finally(() => setFetching(false));
  };

  useEffect(() => {
    fetchApplications();
  }, [page, per_page]);

  function handleRequestSort(property) {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      const newSelecteds = data.map(n => n.uid);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }

  function handleClick(name) {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  }

  function handleChangePage(_, newPage) {
    setSelected([]);
    setPage(newPage + 1);
  }

  function handleChangeRowsPerPage(event) {
    setSelected([]);
    setPerPage(+event.target.value);
  }

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = meta.per_page === 0;
  const handleChange = name => value => {
    setFilters(filters => ({
      ...filters,
      [name]: value
    }));
  };
  return (
    <div className={classes.root}>
      {showFilter && (
        <SearchBar
          filters={filters}
          handleChange={handleChange}
          applyFilter={() => fetchApplications()}
        />
      )}
      <Paper className={classes.paper}>
        {fetching && <CoverLoad />}
        <EnhancedTableToolbar
          numSelected={selected.length}
          toggleFilter={() => setShowFilter(!showFilter)}
        />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {data.map(row => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${row.id}`;

                return (
                  <TableRow
                    hover
                    onClick={() => handleClick(row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      <Link to={`/profile/${row.uid}`}>{row.name}</Link>
                    </TableCell>
                    <TableCell>
                      {new Date(row.applied_date).toDateString()}
                    </TableCell>
                    <TableCell>{splitAndCapitalize(row.status)}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows && (
                <TableRow>
                  <TableCell colSpan={6}>No Data</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={meta.total}
          rowsPerPage={per_page}
          page={meta.page - 1}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
