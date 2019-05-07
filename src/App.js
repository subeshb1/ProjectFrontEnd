import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import {Route} from 'react-router-dom';
import Login from "pages/auth/login";
const login = () => {
  fetch('http://localhost:4000')
  .then(console.log)
  .catch(console.log);
}
class App extends Component {
  render() {
    return (
      <Route path="/login" component={Login}/>
    );
  }
}

export default App;
