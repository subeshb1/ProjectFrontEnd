import React from 'react';
import { Route } from 'react-router-dom';
//components
import TestPage from './TestPage';
import AgricultureTest from './Categories/AgricultureTest';
import AyurvedTest from './Categories/AyurvedTest';

export default function Test() {
    return (
        <React.Fragment>
            <Route
                exact path='/jobseeker/test' component={TestPage}
            />

            <Route
                path='/jobseeker/test/agriculture' component={AgricultureTest}
            />

            <Route
                path='/jobseeker/test/ayurved' component={AyurvedTest}
            />
        </React.Fragment>
    );
}