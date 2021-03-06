import React, {  } from "react";
import { Paper, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import companyAvatar from "assets/images/avatar/company.jpg";
import { Link } from "react-router-dom";

const splitAndCapitalize = str =>
  str
    ? str
        .split("_")
        .map(x => x[0].toUpperCase() + x.slice(1))
        .join(" ")
    : "";

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
export default JobCard