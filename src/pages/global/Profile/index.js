import React from "react";
import ViewProfile from "components/ViewProfile";
export default function Profile({
  match: {
    params: { uid }
  }
}) {
  return <ViewProfile uid={uid} />;
}
