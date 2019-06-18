import React from 'react';
import {Route} from "react-router-dom";
//component
import ViewProfile from "components/ViewProfile/JobProviderProfile.js";

export default function JobProvider() {
    return(
        <div>
            <Route 
                path="/jobprovider"
                component={ViewProfile}
            />
        </div>
    );
}