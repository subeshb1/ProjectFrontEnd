import React from "react";
import Profile from "./Profile";
import Stats from "./Stats";
import SkillTest from "./SkillTest";
import ProtectedRoute from "components/ProtectedRoute";


export default function JobSeeker() {
  return (
    <div>
      <ProtectedRoute roles={["job_seeker"]} path="/jobseeker/profile" component={Profile} />
      <ProtectedRoute roles={["job_seeker"]} path="/jobseeker/stats" component={Stats} />
      <ProtectedRoute roles={["job_seeker"]} path="/jobseeker/skill" component={SkillTest} />
    </div>
  );
}
