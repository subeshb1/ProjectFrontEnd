import React from "react";
import Profile from "./Profile";
import ProtectedRoute from "components/ProtectedRoute";
import Jobs from "./Jobs";


export default function JobProvider() {
  return (
    <div>
      <ProtectedRoute  roles={["job_provider"]} path="/jobprovider/profile" component={Profile} />
      <ProtectedRoute  roles={["job_provider"]} path="/jobprovider/jobs" component={Jobs} />
    </div>
  );
}
