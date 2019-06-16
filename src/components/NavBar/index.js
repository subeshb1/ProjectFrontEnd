import React, { useContext } from "react";
import { AuthContext } from "context/AuthProvider";
import DefaultNav from "./DefaultNav";
import JobSeekerNav from "./JobSeekerNav";
import JobProviderNav from "./JobProviderNav";

export default function NavBar() {
  const {role} = useContext(AuthContext);
  switch (role) {
    case "job_seeker":
      return <JobSeekerNav />;
    case "job_provider":
      return <JobProviderNav />;
    default:
      return <DefaultNav />;
  }
}
