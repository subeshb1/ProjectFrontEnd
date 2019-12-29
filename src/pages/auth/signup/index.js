import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
  Button
} from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import { LoadContext } from "context";

const useStyles = makeStyles({
  formContainer: {
    display: "grid",
    justifyContent: "center",
    maxWidth: "100%"
  },
  formHeader: {
    fontFamily: "'Roboto Condensed', sans-serif ",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    background: "#003a6bb5",
    borderRight: "12px solid #004865",
    borderLeft: "12px solid #004865",
    marginTop: 60, //match this margin with form's marginBottom
    padding: 12,
    textAlign: "center",
    "& span": {
      color: "white"
    }
  },
  form: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    boxShadow: "0 0 2px grey",
    display: "grid",
    justifyContent: "center",
    minWidth: 310,
    width: "25vw",
    padding: "20px 0",
    marginBottom: 60
  },
  userIcon: {
    textAlign: "center",
    "& i": {
      height: 60,
      width: 60,
      fontSize: 35,
      border: "2px solid black",
      borderRadius: "50%",
      padding: 10
    }
  },
  textField: {
    display: "block",
    "& input": {
      minWidth: 245
    }
  },
  button: {
    margin: "5px 0",
    background: "#212121",
    color: "white",
    "&:hover": {
      background: "black"
    }
  }
});

function SignUp({ history }) {
  const {
    formContainer,
    formHeader,
    form,
    userIcon,
    textField,
    button
  } = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { loading, setLoading } = useContext(LoadContext);

  //create state variables
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    confirm_password: "",
    type: ""
  });

  //state variable names should match with event.target.name
  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  const [redirect, setRedirect] = React.useState({
    status: null
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    setLoading(true);
    return axios
      .post("api/v1/users", values)
      .then(response => {
        if (response.status === 200) {
          setRedirect({ status: true });
          enqueueSnackbar("Sign Up Successful! Login to continue", {
            variant: "success",
            autoHideDuration: 4000
          });
        }
      })
      .catch(error => {
        console.log({ ...error });
        let message = error.message.includes(422)
          ? "Looks like there are some issues in the form!"
          : "Unable to connect to the Server";
        enqueueSnackbar(message, { variant: "error", autoHideDuration: 4000 });
      })
      .finally(() => setLoading(false));
  }

  React.useEffect(() => {
    if (redirect.status) {
      history.push("/login"); //redirects to localhost:3000/login}
    }
  }, [redirect.status]);

  return (
    <div className={formContainer}>
      <h1 className={formHeader}>
        SIGN <span>UP</span>
      </h1>

      <form
        className={form}
        validate="true"
        onSubmit={evt => !loading && handleSubmit(evt)}
      >
        <div className={userIcon}>
          <i className="fas fa-user-tie" />
        </div>

        <TextField
          id="email"
          className={textField}
          label="Email" /* placeholder */
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          required
          value={values.email}
          onChange={handleChange}
        />

        <TextField
          id="password"
          className={textField}
          label="Password"
          type="password"
          required
          name="password"
          margin="normal"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
        />

        <TextField
          id="confirm-password"
          className={textField}
          label="Re-enter Password"
          type="password"
          name="confirm_password"
          required
          margin="normal"
          variant="outlined"
          value={values.confirm_password}
          onChange={handleChange}
        />

        <FormControl variant="outlined" style={{ margin: "15px 0" }}>
          <InputLabel htmlFor="outlined-account-type">Account Type</InputLabel>
          <Select
            value={values.type}
            onChange={handleChange}
            input={
              <OutlinedInput
                labelWidth={98}
                name="type"
                id="outlined-account-type"
              />
            }
          >
            <MenuItem value="job_seeker">Job Seeker</MenuItem>
            <MenuItem value="job_provider">Job Provider</MenuItem>
          </Select>
        </FormControl>

        <div style={{ textAlign: "right" }}>
          <Button className={button} type="submit">
            Create an Account
          </Button>
        </div>

        <Link
          to="/login"
          style={{ textAlign: "right", textDecoration: "underline" }}
        >
          Already have an Account? Login!
        </Link>
      </form>
    </div>
  );
}

export default withRouter(SignUp);
