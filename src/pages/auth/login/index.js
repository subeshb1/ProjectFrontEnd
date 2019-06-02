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
    margin: "75px auto",
    width:'29vw',
    minWidth:310,
    flexWrap: "wrap",
    boxShadow: "0 0 2px grey",
    padding: "50px 20px",
    borderRadius: "8px",

    flexDirection: "column",

    '& h1': {
      textAlign: "center",
      display: "block",
      background: "#37677aa1",
      fontFamily:"'Roboto Condensed', sans-serif ",
      borderLeft: "12px solid #37677A",
      borderRight: "12px solid #37677A",
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      margin: "-50px -20px 30px -20px",
      padding:12,
      '& span':{
        color:'white'
      }
    }
  },
  link: {
    textDecoration: "underline",
    marginTop: 10,
    textAlign: "right"
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
        <h1>GET <span> STARTED </span></h1>
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
          style={{ marginTop: 20, width: 100 }}
        >
          Login
        </Button>
        <Link to="/signup" className={classes.link}>
          Don't have an Accout? Sign Up!
        </Link>
      </form>
    </div>
  );
}
export default withRouter(withStyles(styles)(Login));
