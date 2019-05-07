import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import Auth from "lib/auth";
import { withRouter } from "react-router-dom";

const styles = () => ({
  container: {
    display: "flex",
    margin: "0 auto",
    maxWidth: "400px",
    flexWrap: "wrap",
    boxShadow: "0 0 2px grey",
    padding: "50px 20px",
    borderRadius: "8px"
  }
});

function Login({ classes, history }) {
  const [{ email, password }, setCredentials] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Auth.isLoggedIn()) history.push("/");
  }, []);

  const updateCredential = key => ({ target: { value } }) =>
    setCredentials({ email, password, [key]: value });

  const login = () => {
    setLoading(true);
    console.log(Auth, Auth.login);
    Auth.login({ email, password })
    .then(() => history.push("/"))
    .catch(console.log)
    .then(() => setLoading(false))
  };

  return (
    <div>
      <form className={classes.container}>
        <TextField
          id="outlined-name"
          label="Email"
          type="email"
          value={email}
          onChange={updateCredential("email")}
          margin="normal"
          fullWidth
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Password"
          type="password"
          value={password}
          onChange={updateCredential("password")}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <Button
          onClick={!loading && login}
          variant="contained"
          size="large"
          color="primary"
          style={{ marginTop: 20 }}
        >
          Login
        </Button>
        {loading && <LinearProgress variant="query" style={{width: '100vw'}}/>}
      </form>
    </div>
  );
}
export default withRouter(withStyles(styles)(Login));
