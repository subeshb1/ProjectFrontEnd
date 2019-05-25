import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "pages/auth/login";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { NavBar } from "components";
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

                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </>
        );
      }}
    />
  );
}

export default App;
