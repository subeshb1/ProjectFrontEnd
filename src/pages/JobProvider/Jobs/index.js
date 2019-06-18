import React from "react";

import ViewJobs from './ViewJobs';
import {Route} from 'react-router-dom';
export default function JobProvider() {
  return (
    <div>
     <Route path="/jobprovider/jobs" component={ViewJobs}/>
    </div>
  );
}
