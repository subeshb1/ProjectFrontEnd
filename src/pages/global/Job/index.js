import React, { useState, useEffect } from "react";
import ViewJob from "components/ViewJob";
import { ContainerLoad } from "components/Loading";
import { useSnackbar } from "notistack";
import axios from "axios";

export default function Job({
  match: {
    params: { uid }
  }
}) {
  const [fetching, setFetching] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const [job, setJob] = useState(null);
  const fetchJob = () => {
    return axios
      .get("api/v1/jobs/" + uid)
      .then(res => {
        setJob(res.data);
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
    fetchJob();
  }, []);
  if (fetching) return <ContainerLoad />;

  return job ? (
    <ViewJob job={job} />
  ) : (
    <div>
      <h1 style={{ textAlign: "center" }}>Error Fetching data</h1>
    </div>
  );
}
