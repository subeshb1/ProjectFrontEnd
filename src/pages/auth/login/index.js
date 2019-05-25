import React, { useState, useEffect,useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import Auth from "lib/auth";
import { withRouter } from "react-router-dom";
import {LoadContext} from 'context/LoadBar';
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

  useEffect(() => {
    if (Auth.isLoggedIn()) history.push("/");
  }, []);

  const updateCredential = key => ({ target: { value } }) =>
    setCredentials({ email, password, [key]: value });

  const {loading, setLoading} = useContext(LoadContext);
  const login = () => {
    setLoading(true);
    Auth.login({ email, password })
    .then(() => history.push("/"))
    .catch(console.log)
    .finally(() => setLoading(false))
  };
  return (
    <div>
      <form className={classes.container}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={updateCredential("email")}
          margin="normal"
          fullWidth
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={updateCredential("password")}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <Button
          onClick={(e) => !loading && login(e)}
          variant="contained"
          size="large"
          color="primary"
          style={{ marginTop: 20 }}
        >
          Login
        </Button>
      </form>
    </div>
  );
}
export default withRouter(withStyles(styles)(Login));
