import React, { useState, useContext } from "react";
import JobSpecification from "../CreateJob/JobSpecification";
import JobInfo from "../CreateJob/JobInfo";
import axios from "axios";
import { ContainerLoad } from "components/Loading";

import { useSnackbar } from "notistack";
import { LoadContext } from "context";

function UpdateJobInfo({ job_info }) {
  const [jobInfo, setJobInfo] = useState(job_info);
  const { enqueueSnackbar } = useSnackbar();
  const { loading, setLoading } = useContext(LoadContext);

  if (loading) return <ContainerLoad />;
  return jobInfo ? <JobInfo {...{ setJobInfo, jobInfo, update: true }} /> : "";
}

export default UpdateJobInfo;
