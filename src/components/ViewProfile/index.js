import React, { useState, useEffect } from "react";
import JobProviderProfile from "./JobProviderProfile";
import JobSeekerProfile from "./JobSeekerProfile";
import { ContainerLoad } from "components/Loading";
import { useSnackbar } from "notistack";
import axios from "axios";

export default function ViewProfile({ currentUser = true, uid }) {
  const [fetching, setFetching] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const [profileData, setProfileData] = useState(null);

  const fetchData = () => {
    setFetching(true);
    const path =
      currentUser && !uid ? "api/v1/profile" : `api/v1/profile/${uid || "1"}`;
    axios
      .get(path)
      .then(res => {
        setProfileData(res.data);
      })
      .catch(() =>
        enqueueSnackbar("Error Fetching data", {
          variant: "error",
          autoHideDuration: 4000
        })
      )
      .finally(() => setFetching(false));
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (fetching) return <ContainerLoad />;

  return profileData ? (
    profileData.user.role === "job_seeker" ? (
      <JobSeekerProfile profileData={profileData} />
    ) : (
      <JobProviderProfile profileData={profileData} />
    )
  ) : (
    <div>
      <h1 style={{ textAlign: "center" }}>Error Fetching data</h1>
    </div>
  );
}
