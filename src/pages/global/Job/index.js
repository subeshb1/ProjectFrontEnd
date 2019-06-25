import React, { useState, useEffect } from "react";
import ViewJob from "components/ViewJob";
import { ContainerLoad } from "components/Loading";
import { useSnackbar } from "notistack";
import axios from "axios";
import { Button } from "@material-ui/core";

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

  const applyJob = () => {
    return axios
      .post(`/api/v1/applicant/${uid}/apply`)
      .then(() => {
        enqueueSnackbar("Your application has been sent!", {
          variant: "success",
          autoHideDuration: 4000
        });
      })
      .catch(e => {
        if (e.response.data.errors[0].message.includes("Already applied!")) {
          enqueueSnackbar("Application already submitted!", {
            variant: "error",
            autoHideDuration: 4000
          });
        } else {
          enqueueSnackbar("Yo are not qualified!", {
            action:(
              <Button onClick={() => alert(e.response.data.errors.map(x=>x.message).join("\n")) }>
                  {'Show Details'}
              </Button>
          ),
            variant: "error",
            autoHideDuration: 6000
          });
        }
      })
      .finally(() => setFetching(false));
  };

  useEffect(() => {
    fetchJob();
  }, []);

  if (fetching) return <ContainerLoad />;

  return job ? (
    <ViewJob job={job} onApply={applyJob} />
  ) : (
    <div>
      <h1 style={{ textAlign: "center" }}>Error Fetching data</h1>
    </div>
  );
}
