import React, { useState, useEffect, useContext } from "react";
import JobTab from "./JobTab";
import axios from "axios";
import { useSnackbar } from "notistack";
import { LoadContext } from "context";
import { Route, Switch } from "react-router-dom";
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
  const { loading, setLoading } = useContext(LoadContext);
  const [fetching, setFetching] = useState(false);
  const [data, setData] = useState();
  const fetchJob = () => {
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
      });
  };
  useEffect(() => {
    fetchJob();
  }, []);
  if (fetching || !data) return <ContainerLoad />;
  if (data && data.length === 0) return <h1>No Job Found</h1>;
  const { job_specification, ...job_info } = data[0];
  return (
    <div>
      <JobTab job_id={job_id} />

      {(() => {
        if (pathname.includes("job_info"))
          return <UpdateJobInfo job_info={job_info} />;

        if (pathname.includes("job_specification"))
          return <UpdateJobSpecification job_info={job_info} />;

        return <ViewJob />;
      })()}
    </div>
  );
}
