import React, { Component } from 'react';
import {Button} from '@material-ui/core';


const login = () => {
  fetch('http://localhost:4000')
  .then(console.log)
  .catch(console.log);
}
class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hello Let's add Something!</h1>
       <Button color={"primary"} variant="contained">Subesh</Button>
      </div>
    );
  }
}

export default App;
