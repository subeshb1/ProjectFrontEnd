import React from "react";
import ViewProfile from 'components/ViewProfile';
import BasicInfoForm from "./BasicInfoForm";
import EducationInfoForm from "./EducationInfoForm";
import WorkExperienceForm from "./WorkExperienceForm";
import { Route} from "react-router-dom";
import ProfileTab from "./ProfileTab";
export default function JobSeeker() {
  return (
    <div style={{ minHeight: "100vh" }}>

      <Route 
        component={ProfileTab}
        path="/jobseeker/profile"
      />
      
      <Route
        component={ViewProfile}
        exact
        path="/jobseeker/profile/"
      />

      <Route
        component={BasicInfoForm}
        path="/jobseeker/profile/basic_info"
      />
      <Route
        component={EducationInfoForm}
        path="/jobseeker/profile/education"
      />
      <Route
        component={WorkExperienceForm}
        path="/jobseeker/profile/work_experience"
      />
    </div>
  );
}
