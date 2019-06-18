import React, { useState, useEffect } from "react";
import JobSpecification from './JobSpecification';
import JobInfo from './JobInfo';

function CreateJob() {
  const [page, setPage] = useState(0);
  const [jobInfo, setJobInfo] = useState({

  });
  const [jobSpecification, setJobSpecification] = useState({
    
  });


  return !page ? <JobSpecification {...{setJobSpecification,setPage}}/> : <JobInfo  {...{setJobInfo,setPage}}/>;
}

export default CreateJob;
