import React from "react";
import Profile from "./Profile";
import ProtectedRoute from "components/ProtectedRoute";
import JobPosted from "components/JobPosted";

export default function JobSeeker() {
  return (
    <div>

      <ProtectedRoute roles={["job_seeker"]} path="/jobseeker/profile" component={Profile} />
      <ProtectedRoute roles={["job_seeker"]} path="/jobseeker/home"
        component={() =>

          <React.Fragment>
            <JobPosted name="RECOMMENDED" />
            <JobPosted name="TOP" />
            <JobPosted name="RECENT" />
          </React.Fragment>

        } />

    </div>
  );
}
