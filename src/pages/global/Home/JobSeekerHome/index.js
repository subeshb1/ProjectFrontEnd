import React, { useState, useEffect } from "react";
import { InputBase, Button, Paper, Divider } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import workImage from "assets/images/work.jpg";
import companyAvatar from "assets/images/avatar/company.jpg";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { CoverLoad } from "components/Loading";

const splitAndCapitalize = str =>
  str
    ? str
        .split("_")
        .map(x => x[0].toUpperCase() + x.slice(1))
        .join(" ")
    : "";
const searchBoxStyles = makeStyles(theme => ({
  form: {
    position: "absolute",
    top: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    height: "35%",
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
    position: "relative"
  },
  image: {
    width: "100%",
    maxHeight: "500px",
    objectFit: "contain",
    minHeight: "200px"
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
    padding: "15px 0",
    fontSize: 35,
    [theme.breakpoints.down(700)]:{
      padding:"30px 0"
    },
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
const SearchBar = withRouter(({ history }) => {
  const {
    form,
    searchBox,
    inputRoot,
    inputInput,
    imgContainer,
    image
  } = searchBoxStyles();
  const { title, titleLine, titleText } = useStyles();

  const [search, setSearch] = React.useState("");

  const handleChange = event => {
    setSearch(event.target.value);
  };

  return (
    <div className={imgContainer}>
      <img src={workImage} alt="Work" className={image} />
      <form class={form} onSubmit={e => e.preventDefault()}>
        <div className={title} style={{ background: "#ffffff9e" }}>
          <span className={titleLine}> </span>
          START <span className={titleText}> SEARCHING JOBS? </span>
          <span className={titleLine}> </span>
        </div>

        <div className={searchBox}>
          <InputBase
            placeholder="Search jobs..."
            classes={{
              root: inputRoot,
              input: inputInput
            }}
            inputProps={{ "aria-label": "Search", name: "job_title" }}
            value={search}
            onChange={handleChange}
          />

          <Button
            onClick={() => history.push(`/search?job_title=${search}`)}
            variant="contained"
            color="primary"
          >
            <SearchIcon />
          </Button>
        </div>
      </form>
    </div>
  );
});

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
export default function JobSeekerHome() {
  const { root, title, titleLine, titleText, wrapper } = useStyles();

  const [data, setData] = useState(null);
  const [fetching, setFetching] = useState(true);
  const [more, setMore] = useState(1);

  const fetchJobs = () => {
    setFetching(true);
    return axios
      .get("/api/v1/jobs/recommend")
      .then(res => setData(res.data))
      .catch(() => {})
      .finally(() => setFetching(false));
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <div>
      <SearchBar />

      <div className={root}>
        {fetching ? (
          <CoverLoad />
        ) : (
          data &&
          Object.entries(data).map(([key, value]) => {
            if (!value.length) return null;
            const isRecommendation = key.toLowerCase() === 'recommended'
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
                  {value.slice(0,more * 9).map(job => (
                    <JobCard job={job} />
                  ))}
                </section>
                {isRecommendation && <Button onClick={_ => setMore(more+1)}>View More</Button>}
              </React.Fragment>
            );
          })
        )}
      </div>
    </div>
  );
}
