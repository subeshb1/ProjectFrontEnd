import React, { useState, useContext } from "react";
import JobSpecification from "./JobSpecification";
import JobInfo from "./JobInfo";
import axios from "axios";
import { ContainerLoad } from "components/Loading";

import { useSnackbar } from "notistack";
import { LoadContext } from "context";

function CreateJob({ history }) {
  const [page, setPage] = useState(0);
  const [jobInfo, setJobInfo] = useState(null);
  const [jobSpecification, setJobSpecification] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const { loading, setLoading } = useContext(LoadContext);

  const saveJob = jobSpecification => {
    setLoading(true);
    axios
      .post("api/v1/jobprovider/job", {
        ...jobInfo,
        job_specifications: jobSpecification
      })
      .then(res => {
        enqueueSnackbar("Job Successfully Created", {
          variant: "success",
          autoHideDuration: 2500
        });
        history.push(`/jobprovider/jobs/${res.data.uid}`);
      })
      .catch(error => {
        let message = error.message.includes(422)
          ? "Looks like there are some issues in the form!"
          : "Unable to connect to the server";
        enqueueSnackbar(message, {
          variant: "error",
          autoHideDuration: 4000
        });
      })
      .finally(() => setLoading(false));
  };

  if (loading) return <ContainerLoad />;

  return page ? (
    <JobSpecification
      {...{ setJobSpecification, setPage, jobSpecification, saveJob }}
    />
  ) : (
    <JobInfo {...{ setJobInfo, setPage, jobInfo }} />
  );
}

export default CreateJob;
