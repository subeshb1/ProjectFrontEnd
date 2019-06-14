import React from "react";
import ProtectedRoute from "components/ProtectedRoute";
import BasicInfoForm from "./BasicInfoForm";
import EducationInfoForm from "./EducationInfoForm";
import WorkExperienceForm from "./WorkExperienceForm";
import { Link } from "react-router-dom";
import ProfileTab from "./ProfileTab";
export default function JobSeeker() {
  return (
    <div>
      <ProfileTab />

      <ProtectedRoute
        component={BasicInfoForm}
        path="/jobseeker/profile/basic_info"
        roles={["job_seeker"]}
      />
      <ProtectedRoute
        component={EducationInfoForm}
        path="/jobseeker/profile/education"
        roles={["job_seeker"]}
      />
      <ProtectedRoute
        component={WorkExperienceForm}
        path="/jobseeker/profile/work_experience"
        roles={["job_seeker"]}
      />
    </div>
  );
}
