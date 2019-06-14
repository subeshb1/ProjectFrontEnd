import React, { useEffect, useContext } from "react";
import Profile from "./Profile";
import {Route} from 'react-router-dom'
export default function JobSeeker() {
  return (
    <div>
      <Route path="/jobseeker/profile" component={Profile} />
    </div>
  );
}
