import React from "react";
import ProtectedRoute from "components/ProtectedRoute";
import NotificationViewer from "./NotificationViewer";

export default function JobSeeker() {
  return (
    <div>
      <ProtectedRoute  roles={["job_seeker","job_provider"]} path="/notification/:id"  component={NotificationViewer} />
      <ProtectedRoute  roles={["job_seeker","job_provider"]} path="/notification" exact component={NotificationViewer} />
    </div>
  );
}
