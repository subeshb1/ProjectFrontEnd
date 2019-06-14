import React, { useEffect, useContext } from "react";
import ProtectedRoute from "components/ProtectedRoute";
import Profile from "./Profile";

export default function JobSeeker() {
  return (
    <div>
      <Profile />
    </div>
  );
}
