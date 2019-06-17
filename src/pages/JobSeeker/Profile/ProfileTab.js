import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Link, withRouter } from "react-router-dom";
//component
import ViewProfile from 'components/ViewProfile/JobSeekerProfile';
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

function ProfileTab({ location: { pathname } }) {
  const classes = useStyles();
  let value = 0;
  switch (pathname) {
    case "/jobseeker/profile/work_experience":
      value = 3;
      break;
    case "/jobseeker/profile/education":
      value = 2;
      break;
      case "/jobseeker/profile/basic_info":
      value = 1;
      break;
    default:
      value = 0;
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab
            label="View Profile"
            component={Link}
            to="/jobseeker/profile"
          />
          <Tab
            label="Basic Information"
            component={Link}
            to="/jobseeker/profile/basic_info"
          />
          <Tab
            label="Education"
            component={Link}
            to="/jobseeker/profile/education"
          />
          <Tab
            label="Work Experience"
            component={Link}
            to="/jobseeker/profile/work_experience"
          />
        </Tabs>
      </AppBar>

      <ViewProfile/>
    </div>
  );
}

export default withRouter(ProfileTab);
