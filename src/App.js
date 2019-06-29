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
import Profile from "./pages/global/Profile";
import Job from "./pages/global/Job";
import Search from './pages/global/Search';

function App() {
  return (
    <Route
      render={({ location }) => {
        return (
          <>
            <NavBar />
            <div style={{ minHeight: "80vh" }}>
              <TransitionGroup>
                <CSSTransition
                  key={location.pathname}
                  classNames="fade"
                  timeout={300}
                >
                  <Switch location={location}>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/how-it-works" component={HowItWorks} />
                    <Route path="/search" component={Search} />
                    <Route
                      path="/(jobseeker|jobprovider)/account"
                      component={Account}
                    />
                    <Route path="/jobseeker" component={JobSeeker} />
                    <Route path="/jobprovider" component={JobProvider} />
                    <Route path="/profile/:uid" component={Profile} />
                    <Route path="/job/:uid" component={Job} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
            <Footer />
          </>
        );
      }}
    />
  );
}

export default App;
