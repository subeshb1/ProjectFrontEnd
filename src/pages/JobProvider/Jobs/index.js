import React from "react";
import Button from "@material-ui/core/Button";

import ViewJobs from "./ViewJobs";
import CreateJob from "./CreateJob";
import { Route,Link } from "react-router-dom";
export default function JobProvider() {
  return (
    <div>
      <Route path="/jobprovider/jobs/create" exact component={CreateJob} />
      <Route path="/jobprovider/jobs" exact component={ViewJobs} />
    </div>
  );
}
