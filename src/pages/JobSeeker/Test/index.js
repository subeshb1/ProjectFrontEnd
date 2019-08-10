import React from 'react';
import { Route } from 'react-router-dom';
//components
import TestPage from './TestPage';
import Test from './Test';

export default function QTest() {
    return (
        <React.Fragment>
            <Route
                exact path='/jobseeker/test' component={TestPage}
            />

            <Route
                path='/jobseeker/test/:id' component={Test}
            />
        </React.Fragment>
    );
}