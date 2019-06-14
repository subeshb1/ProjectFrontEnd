import React from "react";
import ProtectedRoute from "components/ProtectedRoute";
import BasicInfoForm from "./BasicInfoForm";
import EducationInfoForm from "./EducationInfoForm";
import {Link} from "react-router-dom";
export default function JobSeeker() {

 

  return (
    <div>
      <Link to="/jobseeker/profile/basic_info">Basic Info</Link>
      <Link to="/jobseeker/profile/education">Update Education</Link>
      <Link to="/jobseeker/profile/work_experience">Update Work Experience</Link>
      <ProtectedRoute component={BasicInfoForm} path="/jobseeker/profile/basic_info" roles={["job_seeker"]} />
      <ProtectedRoute component={EducationInfoForm} path="/jobseeker/profile/education" roles={["job_seeker"]} />

    </div>
  );
}
