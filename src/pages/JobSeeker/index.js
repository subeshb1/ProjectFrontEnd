import React from "react";
import Profile from "./Profile";
import ProtectedRoute from "components/ProtectedRoute";


export default function JobSeeker() {
  return (
    <div>
      <ProtectedRoute  roles={["job_seeker"]} path="/jobseeker/profile" component={Profile} />
    </div>
  );
}
