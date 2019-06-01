import React, { useState, useEffect, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Auth from "lib/auth";
import { withRouter, Link } from "react-router-dom";
import { LoadContext } from "context";
import { useSnackbar } from "notistack";

const styles = () => ({
  container: {
    display: "flex",
    margin: "0 auto",
    maxWidth: "400px",
    flexWrap: "wrap",
    boxShadow: "0 0 2px grey",
    padding: "50px 20px",
    borderRadius: "8px",
    marginTop: "10px",
    flexDirection: "column"
  },
  link: {
    textDecoration: "underline",
    marginTop: 10
  }
});

function Login({ classes, history }) {
  const [{ email, password }, setCredentials] = useState({
    email: "",
    password: ""
  });
  const { enqueueSnackbar } = useSnackbar();

  
  useEffect(() => {
    if (Auth.isLoggedIn()) history.push("/");
  });

  const updateCredential = key => ({ target: { value } }) =>
    setCredentials({ email, password, [key]: value });

  const { loading, setLoading } = useContext(LoadContext);

  const login = () => {
    setLoading(true);
    Auth.login({ email, password })
      .then(() => history.push("/"))
      .catch(err =>
        enqueueSnackbar(
          err.message.includes(401)
            ? "Invalid Email or Password"
            : "Unable to connect to the Server",
          { autoHideDuration: 2500, variant: "error" }
        )
      )
      .finally(() => setLoading(false));
  };
  return (
    <div>
      <form className={classes.container}>
        <h1>Log In </h1>
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
          onClick={e => !loading && login(e)}
          variant="contained"
          size="large"
          color="primary"
          style={{ marginTop: 20 }}
        >
          Submit
        </Button>
        <Link to="/signup" className={classes.link}>
          Don't have an Accout? Sign Up!
        </Link>
      </form>
    </div>
  );
}
export default withRouter(withStyles(styles)(Login));
