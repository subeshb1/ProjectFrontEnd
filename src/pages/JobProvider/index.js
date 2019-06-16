import React from "react";
import Profile from "./Profile";
import ProtectedRoute from "components/ProtectedRoute";


export default function JobProvider() {
  return (
    <div>
      <ProtectedRoute  roles={["job_provider"]} path="/jobprovider/profile" component={Profile} />
    </div>
  );
}
