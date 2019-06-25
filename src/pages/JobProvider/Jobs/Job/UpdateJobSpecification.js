import React, { useState, useContext } from "react";
import JobSpecification from "../CreateJob/JobSpecification";
import JobInfo from "../CreateJob/JobInfo";
import axios from "axios";
import { ContainerLoad } from "components/Loading";

import { useSnackbar } from "notistack";
import { LoadContext } from "context";

function UpdateJobSpecification({ job_info, saveJob }) {
  const [page, setPage] = useState(0);
  const [jobInfo, setJobInfo] = useState(null);
  const [jobSpecification, setJobSpecification] = useState(job_info);
  const { enqueueSnackbar } = useSnackbar();
  const { loading, setLoading } = useContext(LoadContext);


  return     <JobSpecification update
      {...{ setJobSpecification: e => saveJob({job_specifications: e}), setPage, jobSpecification }}
    />
  
}

export default UpdateJobSpecification;
