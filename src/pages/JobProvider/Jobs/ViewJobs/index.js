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
import {
  CategorySelect,
  JobTypeSelect,
  JobLevelSelect
} from "components/CustomSelect/index.js";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import { CoverLoad } from "components/Loading";
import { TextField } from "@material-ui/core";

import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

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
          placeholder="Search jobs..."
          variant="outlined"
          inputProps={{ "aria-label": "Search" }}
          value={filters.job_title}
          onChange={e => handleChange("job_title")(e.target.value)}
        />

        <CategorySelect
          categories={filters.categories}
          handleChange={handleChange}
        />
        <JobTypeSelect
          isMulti
          job_type={filters.job_type}
          handleChange={handleChange}
        />
        <JobLevelSelect
          isMulti
          level={filters.level}
          handleChange={handleChange}
        />
        <input type="submit" style={{ display: "none" }} />
      </form>
    </div>
  );
};

const headRows = [
  { id: "job_title", numeric: false, disablePadding: true, label: "Job Title" },
  {
    id: "application_deadline",
    numeric: false,
    disablePadding: false,
    label: "Deadline"
  },
  { id: "level", numeric: false, disablePadding: false, label: "Job Level" },
  { id: "job_type", numeric: false, disablePadding: false, label: "Job Type" },
  {
    id: "application_deadline",
    numeric: false,
    disablePadding: false,
    label: "Status"
  },
  {
    id: "created_at",
    numeric: false,
    disablePadding: false,
    label: "Created At"
  },
  {
    id: "views",
    numeric: false,
    disablePadding: false,
    label: "Views"
  }
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headRows.map(row => (
          <TableCell
            key={row.id}
            align={row.numeric ? "right" : "left"}
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
            Jobs
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
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

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("created_at");
  const [selected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [per_page, setPerPage] = React.useState(5);
  const [showFilter, setShowFilter] = React.useState(false);
  const [filters, setFilters] = React.useState({
    job_title: "",
    categories: [],
    level: [],
    job_type: []
  });

  const setSelected = () => {};
  const [meta, setMeta] = React.useState({
    total: 100,
    per_page: 10,
    page: 1
  });

  const [fetching, setFetching] = useState(false);
  const [data, setData] = useState([]);

  const fetchJobs = () => {
    setFetching(true);
    return axios
      .get("api/v1/jobprovider/job", {
        params: { ...filters, page, per_page, order, order_by: orderBy }
      })
      .then(res => res.data)
      .then(res => {
        setData(res.data);
        setMeta(res.meta);
      })
      .finally(() => setFetching(false));
  };
  useEffect(() => {
    fetchJobs();
  }, [page, per_page, order, orderBy]);
  const handleChange = name => value => {
    setFilters(filters => ({
      ...filters,
      [name]: value
    }));
  };
  function handleRequestSort(_, property) {
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
    setPage(newPage + 1);
  }

  function handleChangeRowsPerPage(event) {
    setPerPage(+event.target.value);
  }

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = meta.per_page === 0;

  return (
    <div className={classes.root}>
      <Link
        style={{ color: "white", alignSelf: "flex-end" }}
        to="/jobprovider/jobs/create"
      >
        <Button variant="contained" size="large" color="primary">
          Post Job
        </Button>
      </Link>
      {showFilter && (
        <SearchBar
          filters={filters}
          handleChange={handleChange}
          applyFilter={() => fetchJobs()}
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
                const isItemSelected = isSelected(row.uid);
                const labelId = `enhanced-table-checkbox-${row.uid}`;

                return (
                  <TableRow
                    hover
                    onClick={() => handleClick(row.uid)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.uid}
                    selected={isItemSelected}
                  >
                    <TableCell component="th" id={labelId} scope="row">
                      <Link to={`/jobprovider/jobs/${row.uid}`}>
                        {row.job_title}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {new Date(row.application_deadline).toDateString()}
                    </TableCell>
                    <TableCell>{splitAndCapitalize(row.level)}</TableCell>
                    <TableCell>{splitAndCapitalize(row.job_type)}</TableCell>
                    <TableCell>{splitAndCapitalize(row.status)}</TableCell>
                    <TableCell>
                      {new Date(row.created_at).toDateString()}
                    </TableCell>
                    <TableCell>{row.views}</TableCell>
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
