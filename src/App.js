import React from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

//components
import { NavBar, Footer } from "components";
import Login from "pages/auth/login";
import SignUp from "pages/auth/signup";
import Home from 'pages/global/Home'
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
