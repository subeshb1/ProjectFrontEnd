import React, { useState, useEffect } from "react";
import { InputBase, Button, Paper, Divider } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
import companyAvatar from "assets/images/avatar/company.jpg";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { CoverLoad } from "components/Loading";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import {
  CategorySelect,
  JobTypeSelect,
  JobLevelSelect
} from "components/CustomSelect/index.js";

const getFilters = () => {
  let params = new URLSearchParams(window.location.search.slice(1));
  return {
    per_page: 15,
    page: params.get("page") || 1,
    job_title: params.get("job_title") || "",
    categories: params.getAll("categories") || [],
    level: params.getAll("level") || [],
    job_type: params.getAll("job_type") || []
  };
};

const pushFilters = filters => {
  let queryString = "";
  queryString += "job_title=" + encodeURI(filters.job_title || "") + "&";
  queryString += "page=" + encodeURI(filters.page || 1) + "&";
  queryString +=
    filters.categories.map(x => "categories=" + encodeURI(x || "")).join("&") +
    "&";
  queryString +=
    filters.level.map(x => "level=" + encodeURI(x || "")).join("&") + "&";
  queryString += filters.job_type
    .map(x => "job_type=" + encodeURI(x || ""))
    .join("&");
  return queryString.replace(/&&/g, "&").replace(/[&]$/, "");
};

const theme = createMuiTheme();
const splitAndCapitalize = str =>
  str
    ? str
        .split("_")
        .map(x => x[0].toUpperCase() + x.slice(1))
        .join(" ")
    : "";
const searchBoxStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    [theme.breakpoints.down(700)]: {
      height: "100%"
    }
  },
  searchBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#004865e3",
    height: 62,
    width: 630,
    margin: "0 auto",
    minWidth: 285,
    [theme.breakpoints.down(700)]: {
      minWidth: 290,
      width: "85vw"
    }
  },
  inputRoot: {
    width: 542,
    minWidth: 200,
    marginRight: -5,
    [theme.breakpoints.down(700)]: {
      minWidth: 205,
      width: "65vw"
    }
  },
  inputInput: {
    height: 34,
    background: "white",
    padding: "0px 15px 0px 10px;",
    borderRadius: 5
  },
  searchType: {
    width: 630,
    margin: "15px auto",
    display: "flex",
    justifyContent: "space-around",
    "& span": {
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline"
      }
    },
    [theme.breakpoints.down(700)]: {
      minWidth: 290,
      width: "85vw"
    }
  },
  imgContainer: {
    width: "100%",
    minHeight: 300,
    position: "relative"
  },
  image: {
    width: "100%",
    maxHeight: "500px",
    objectFit: "contain",
    minHeight: "200px"
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

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    position: "relative",
    minHeight: 100
  },
  //title styling
  title: {
    textAlign: "center",
    padding: "30px 0",
    fontSize: 35,
    [theme.breakpoints.down(500)]: {
      fontSize: 20
    }
  },
  titleText: { color: "#37677A", fontWeight: "bolder" },

  titleLine: {
    border: "3px solid black",
    display: "inline-block",
    width: "5vw",
    position: "relative",
    bottom: 9,
    margin: "0 10px",
    [theme.breakpoints.down(500)]: {
      bottom: 4
    }
  },

  wrapper: {
    background: "whitesmoke",
    display: "flex",
    justifyContent: "center",

    flexWrap: "wrap",
    padding: "20px 0"
  },
  paper: {
    margin: "15px 15px",
    cursor: "pointer",
    maxWidth: 500,
    padding: 5,
    width: "100%"
  },
  companyTitle: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  logo: {
    height: 130,
    width: 130,
    [theme.breakpoints.down(450)]: {
      height: 50,
      width: 50,
      alignSelf: "center"
    }
  },
  list: {
    listStyleType: "square",
    paddingLeft: 15,
    fontSize: 12,
    //to hide long sentences
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },

  card: {
    margin: "20px 35px",
    textAlign: "center",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  media: { width: 200, height: 100 },
  job_description: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 20px"
  },
  jobWrapper: {
    display: "flex"
  }
}));
const SearchBar = ({ filters, handleChange, applyFilter }) => {
  const {
    form,
    searchBox,
    inputRoot,
    inputInput,
    imgContainer,
    image,
    containerAll
  } = searchBoxStyles();
  const { title, titleLine, titleText } = useStyles();

  return (
    <div className={imgContainer}>
      <form
        className={form}
        onSubmit={e => {
          e.preventDefault();
          applyFilter();
        }}
      >
        <div className={title} style={{ background: "#ffffff9e" }}>
          <span className={titleLine}> </span>
          <span className={titleText}> SEARCH </span>
          <span className={titleLine}> </span>
        </div>

        <div className={searchBox}>
          <InputBase
            placeholder="Search jobs..."
            classes={{
              root: inputRoot,
              input: inputInput
            }}
            inputProps={{ "aria-label": "Search" }}
            value={filters.job_title}
            onChange={e => handleChange("job_title")(e.target.value)}
          />

          <Button variant="contained" color="primary" type="submit">
            <SearchIcon />
          </Button>
        </div>

        <Divider />

        <div className={containerAll}>
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
        </div>
      </form>
    </div>
  );
};

const JobCard = ({ job }) => {
  const {
    paper,
    companyTitle,
    logo,
    job_description,
    jobWrapper
  } = useStyles();
  return (
    <Paper className={paper}>
      <Link to={`/job/${job.uid}`}>
        <div style={{ display: "flex" }}>
          <h4 className={companyTitle}>{job.company_name}</h4>
          <div style={{ margin: "0 0 0 auto" }}>Views: {job.views}</div>
        </div>
        <Divider />
        <div className={jobWrapper}>
          <img
            src={job.company_avatar || companyAvatar}
            alt="Company logo"
            className={logo}
          />
          <div class={job_description}>
            <div
              style={{
                fontSize: "1.1rem"
              }}
            >
              {job.job_title}
            </div>
            <div style={{ color: "green" }}>
              Rs. {job.min_salary} - Rs. {job.max_salary}{" "}
            </div>
            <div>
              {job.open_seats} {job.open_seats > 1 ? "seats" : "seat"}
            </div>
            <div>
              {splitAndCapitalize(job.level)},{" "}
              {splitAndCapitalize(job.job_type)}
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#8c0000"
              }}
              className={companyTitle}
            >
              {job.application_deadline &&
                new Date(job.application_deadline).toDateString()}
            </div>
          </div>
        </div>
      </Link>
    </Paper>
  );
};

function Search({ history }) {
  const { root, title, titleLine, titleText, wrapper } = useStyles();

  const [data, setData] = useState(null);
  const [fetching, setFetching] = useState(true);
  // const [page, setPage] = React.useState(0);
  // const [per_page, setPerPage] = React.useState(15);
  const [meta, setMeta] = React.useState({
    total: 100,
    per_page: 10,
    page: 1
  });
  // fetching
  const [filters, setFilters] = useState(getFilters());

  const fetchJobs = () => {
    setFetching(true);
    const params = getFilters();
    return axios
      .get("/api/v1/jobs", { params: { ...params } })
      .then(res => {
        setData(res.data.data);
        setMeta(res.data.meta);
      })
      .catch(() => {})
      .finally(() => setFetching(false));
  };

  const applyFilter = () => {
    handleChange("page")(1);
    if (!fetching) {
      history.push("/search?" + pushFilters({ ...filters, page: 1 }));
      fetchJobs();
    }
  };

  const handleChange = name => value => {
    setFilters(filters => ({
      ...filters,
      [name]: value
    }));
  };

  useEffect(() => {
    fetchJobs();
  }, [filters.page]);

  return (
    <div>
      <SearchBar
        filters={filters}
        handleChange={handleChange}
        applyFilter={applyFilter}
      />

      <div className={root}>
        {fetching ? (
          <CoverLoad />
        ) : data && data.length ? (
          Object.entries({ Result: data }).map(([key, value]) => {
            if (!value.length) return null;
            return (
              <React.Fragment key={key}>
                <div className={title}>
                  <span className={titleLine}> </span>
                  <span className={titleText}>
                    {splitAndCapitalize(key).toUpperCase()}:
                  </span>
                  <span className={titleLine}> </span>
                </div>
                <section className={wrapper}>
                  {value.map(job => (
                    <JobCard job={job} />
                  ))}
                </section>
              </React.Fragment>
            );
          })
        ) : (
          <h1 style={{ textAlign: "center" }}>No Jobs found</h1>
        )}
        <MuiThemeProvider theme={theme}>
          <Pagination
            style={{
              display: "flex",
              justifyContent: "center"
            }}
            size="large"
            limit={15}
            offset={Math.min(15 * (filters.page - 1), meta.total)}
            total={meta.total}
            onClick={(e, offset) => {
              handleChange("page")(offset / 15 + 1);
              history.push(
                "/search?" + pushFilters({ ...filters, page: offset / 15 + 1 })
              );
            }}
          />
        </MuiThemeProvider>
      </div>
    </div>
  );
}

export default withRouter(Search);
