import React, { useState, useEffect, useContext } from "react";
import JobTab from "./JobTab";
import axios from "axios";
import { useSnackbar } from "notistack";
import ViewJob from "components/ViewJob";
import { ContainerLoad } from "components/Loading";
import UpdateJobInfo from "./UpdateJobInfo";
import UpdateJobSpecification from "./UpdateJobSpecification";

export default function Job(props) {
  const {
    match: {
      params: { job_id }
    },
    location: { pathname }
  } = props;
  const { enqueueSnackbar } = useSnackbar();
  const [fetching, setFetching] = useState(true);
  const [data, setData] = useState();
  const fetchJob = () => {
    setFetching(true);
    return axios
      .get(`api/v1/jobprovider/job/${job_id}`)
      .then(res => {
        setData(res.data);
      })
      .catch(() => {
        enqueueSnackbar("Error Fetching data", {
          variant: "error",
          autoHideDuration: 4000
        });
      }).finally(() => setFetching(false));
  };
  useEffect(() => {
    fetchJob();
  }, []);

  const saveJob = (params) => {
    setFetching(true);
    debugger
    return axios
      .put(`api/v1/jobprovider/job/${job_id}`, params)
      .then(res => {
        setData(res.data)
        enqueueSnackbar("Job Details Updated", {
          variant: "success",
          autoHideDuration: 2500
        });
      })
      .catch(() => {
        enqueueSnackbar("Error Fetching data", {
          variant: "error",
          autoHideDuration: 4000
        });
      }).finally(() => setFetching(false));
  };


  if (fetching || !data) return <ContainerLoad />;
  if (!data) return <h1>No Job Found</h1>;
  const { job_specifications, ...job_info } = data;
  return (
    <div>
      <JobTab job_id={job_id} />

      {(() => {
        if (pathname.includes("job_info"))
          return <UpdateJobInfo job_info={job_info} saveJob={saveJob}/>;

        if (pathname.includes("job_specification"))
          return <UpdateJobSpecification job_info={job_specifications} saveJob={saveJob}/>;

        return <ViewJob job={data}/>;
      })()}
    </div>
  );
}
