import React from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

//components
import { NavBar, Footer } from "components";
import Login from "pages/auth/login";
import SignUp from "pages/auth/signup";
import Home from "pages/global/Home";
import HowItWorks from "pages/global/HowItWorks";
import JobSeeker from "pages/JobSeeker";
import JobProvider from "pages/JobProvider";

import "./css/index.css";
import Account from "./pages/Account";


function App() {
  return (
    <Route
      render={({ location }) => {
        return (
          <>
            <NavBar />

            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                classNames="fade"
                timeout={500}
              >
                <Switch location={location}>
                  <Route path="/login" component={Login} />
                  <Route path="/" exact component={Home} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/how-it-works" component={HowItWorks} />
                  <Route path="/(jobseeker|jobprovider)/account"  component={Account} />
                  <Route path="/jobseeker" component={JobSeeker} />
                  <Route path="/jobprovider" component={JobProvider} />

                </Switch>
              </CSSTransition>
            </TransitionGroup>

            <Footer />
          </>
        );
      }}
    />
  );
}

export default App;
