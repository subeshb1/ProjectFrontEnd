import React, { useEffect, useContext } from "react";
import ProtectedRoute from "components/ProtectedRoute";
import BasicInfoForm from "./Profile/BasicInfoForm";

export default function JobSeeker() {

 

  return (
    <div>
      <ProtectedRoute component={BasicInfoForm} path="/jobseeker/profile/basic_info" roles={["job_seeker"]} />
    </div>
  );
}
