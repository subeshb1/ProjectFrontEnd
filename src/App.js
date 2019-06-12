import React from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

//components
import { NavBar, Footer } from "components";
import Login from "pages/auth/login";
import SignUp from "pages/auth/signup";
import Home from 'pages/global/Home'
import HowItWorks from 'pages/global/HowItWorks';
import BasicInfoForm from 'pages/JobSeeker/CreateProfile/BasicInfoForm.js';
import EducationInfoForm from 'pages/JobSeeker/CreateProfile/EducationInfoForm.js';
import "./css/index.css";

function App() {
  return (
    <Route
      render={({ location }) => {
        return (
          <>
            <NavBar />

            <TransitionGroup>
              <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
                <Switch location={location}>
                  <Route path="/login" component={Login} />
                  <Route path="/" exact component={Home} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/how-it-works" component={HowItWorks} />

                  {/* Job Seeker Routes */}
                  <Route path="/jobseeker/create-profile/basic-info" component={BasicInfoForm}/>
                  <Route path="/jobseeker/create-profile/education-info" component={EducationInfoForm}/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>

            <Footer/>
            
          </>
        );
      }}
    />
  );
}

export default App;
