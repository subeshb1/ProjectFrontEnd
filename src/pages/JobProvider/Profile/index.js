import ViewProfile from "components/ViewProfile/";

import React from "react";
import BasicInfoForm from "./BasicInfoForm";
import { Route } from "react-router-dom";
import ProfileTab from "./ProfileTab";
export default function JobProvider() {
  return (
    <div style={{ minHeight: "80vh" }}>
      <Route component={ProfileTab} path="/jobprovider/profile/" />

      <Route component={BasicInfoForm} path="/jobprovider/profile/basic_info" />

      <Route path="/jobprovider/profile" exact component={ViewProfile} />
    </div>
  );
}
