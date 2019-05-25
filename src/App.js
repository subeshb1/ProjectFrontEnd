import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "pages/auth/login";
import LoadBar from "context/LoadBar";
import "./css/index.css";
class App extends Component {
  render() {
    return (
      <LoadBar>
        <Route path="/login" component={Login} />
      </LoadBar>
    );
  }
}

export default App;
