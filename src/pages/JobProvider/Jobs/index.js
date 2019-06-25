import React from "react";

import Job from "./Job";
import ViewJobs from "./ViewJobs";
import CreateJob from "./CreateJob";
import { Route, Switch } from "react-router-dom";
export default function JobProvider() {
  return (
    <div>
      <Switch>
        <Route path="/jobprovider/jobs/create" exact component={CreateJob} />
        <Route path="/jobprovider/jobs" exact component={ViewJobs} />
        <Route path="/jobprovider/jobs/:job_id" component={Job} />
        <Route
          path=""
          component={() => {
            return <div>No Content</div>;
          }}
        />
      </Switch>
    </div>
  );
}
