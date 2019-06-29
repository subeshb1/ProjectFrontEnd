import React from "react";
import Profile from "./Profile";
import Stats from "./Stats";
import ProtectedRoute from "components/ProtectedRoute";


export default function JobSeeker() {
  return (
    <div>
      <ProtectedRoute  roles={["job_seeker"]} path="/jobseeker/profile" component={Profile} />
      <ProtectedRoute  roles={["job_seeker"]} path="/jobseeker/stats" component={Stats} />
    </div>
  );
}
