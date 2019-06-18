import React from "react";
import BasicInfoForm from "./BasicInfoForm";
import { Route} from "react-router-dom";
import ProfileTab from "./ProfileTab";
export default function JobProvider() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Route
        component={ProfileTab}
        path="/jobprovider/profile/"
      />

      <Route
        component={BasicInfoForm}
        path="/jobprovider/profile/basic_info"
      />

{/* Add Profile View Here */}
      {/* <Route
        component={ProfileView}
        path="/jobprovider/profile/work_experience"
      /> */}
    </div>
  );
}
