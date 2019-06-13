import React, { useState, useContext, useEffect } from "react";
import {
  TextField,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  FormControlLabel,
  Button
} from "@material-ui/core";
import axios from "axios";
import { useSnackbar } from "notistack";
import { LoadContext } from "context";
import _ from 'lodash';
import { withRouter } from "react-router-dom";
//datepicker
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
//draft (for description)
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
//styles
import { useStyles } from "./styles.js";

function BasicInfoForm({ history }) {
  const { root, form, inputField, button } = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { loading, setLoading } = useContext(LoadContext);
  //jobseeker information
  const [state, setValues] = useState({
    name: "",
    website: "",
    phone_numbers: {
      //object
      home: "",
      personal: ""
    },
    social_accounts: {
      //object
      facebook: ""
    },
    description: "", //string
    gender: "",
    avatar: null,
    address: {
      //object
      permanent: ""
    }
  });

  useEffect(() => {
    axios
      .get("api/v1/profile/basic_info")
      .then(res => {
        setValues(_.omit(res.data,['established_date', 'organization_type','avatar']));
      })
      .catch(console.error);
  }, []);
  //state: date
  const [selectedDate, setSelectedDate] = useState({
    birth_date: new Date()
  });
  //description (object)
  const [editorState, setEditorState] = useState({
    description: EditorState.createEmpty() //object
  });

  const [redirect, setRedirect] = useState({
    status: null
  });

  //Handlers

  //single property handlers
  const handleChange = name => event => {
    setValues({ ...state, [name]: event.target.value });
  };
  //address
  const handleAddressChange = event => {
    setValues({
      ...state,
      address: {
        ...state.address,
        [event.target.name]: event.target.value
      }
    });
  };

  //date
  const handleDateChange = date => {
    setSelectedDate({ birth_date: date });
  };

  //phone_numbers
  const handlePhoneNumberChange = event => {
    setValues({
      ...state, //create copy of state variable object named 'state'
      phone_numbers: {
        //access phone_numbers property in 'state'
        ...state.phone_numbers,
        [event.target.name]: event.target.value
      }
    });
  };

  //social_links
  const handleSocialAccountsChange = event => {
    setValues({
      ...state,
      social_accounts: {
        ...state.social_accounts,
        [event.target.name]: event.target.value
      }
    });
  };

  const handleEditorStateChange = name => data => {
    setEditorState({
      [name]: data
    });
    //converts description(object) to HTML string
    let descriptionString = draftToHtml(
      convertToRaw(editorState.description.getCurrentContent())
    );
    setValues({
      ...state,
      [name]: descriptionString
    });
    //console.log(state[name]);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setLoading(true);
    return axios
      .put("api/v1/profile/basic_info", { ...state, ...selectedDate })
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          enqueueSnackbar("Basic information submitted", {
            variant: "success",
            autoHideDuration: 2500
          });
          enqueueSnackbar("Enter educational qualifications", {
            variant: "success",
            autoHideDuration: 2500
          });
          setRedirect({ status: true });
        }
      })
      .catch(error => {
        console.log({ ...error });
        let message = error.message.includes(422)
          ? "Submission failed"
          : "Unable to connect to the server";
        enqueueSnackbar(message, { variant: "error", autoHideDuration: 2500 });
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    redirect.status && history.push("/jobseeker/create-profile/education-info");
  });

  return (
    <div className={root}>
      <form className={form} validate onSubmit={handleSubmit}>
        <h1 style={{ fontSize: 35 }}> BASIC INFORMATION </h1>
        <TextField
          id="name"
          label="Name"
          className={inputField}
          value={state.name}
          onChange={handleChange("name")}
          variant="outlined"
          margin="normal"
          required
        />

        <TextField
          id="address"
          label="Address"
          className={inputField}
          value={state.address.permanent}
          onChange={handleAddressChange}
          margin="normal"
          name="permanent"
          required
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            value={selectedDate.birth_date}
            onChange={handleDateChange}
            label="Date of Birth"
            className={inputField}
            format="yyyy/MM/dd"
            required
          />
        </MuiPickersUtilsProvider>

        <div>
          <TextField
            id="phone_numbers_personal"
            label="Personal Number"
            className={inputField}
            value={state.phone_numbers.personal}
            onChange={handlePhoneNumberChange}
            margin="normal"
            type="number"
            name="personal"
            required
          />

          <TextField
            id="phone_numbers_home"
            label="Telephone Number"
            className={inputField}
            value={state.phone_numbers.home}
            onChange={handlePhoneNumberChange}
            margin="normal"
            type="number"
            name="home"
          />
        </div>

        <TextField
          id="website"
          label="Website"
          className={inputField}
          value={state.website}
          onChange={handleChange("website")}
          margin="normal"
        />

        <div className={inputField}>
          <p style={{ marginTop: "15px" }}>Social Accounts</p>
          <TextField
            id="social_accounts_facebook"
            label="Facebook"
            value={state.social_accounts.facebook}
            onChange={handleSocialAccountsChange}
            margin="normal"
            name="facebook"
          />
        </div>
        <div className={inputField}>
          <FormControl component="fieldset" required>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="Gender"
              name="gender"
              required
              value={state.gender}
              onChange={handleChange("gender")}
            >
              <FormControlLabel
                value="female"
                control={<Radio color="primary" />}
                label="Female"
                required
              />
              <FormControlLabel
                value="male"
                control={<Radio color="primary" />}
                label="Male"
                required
              />
              <FormControlLabel
                value="other"
                required
                control={<Radio color="primary" />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={inputField}>
          <p style={{ margin: "15px 0" }}>Describe yourself</p>
          <Editor
            editorState={editorState.description}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            toolbarClassName="toolbar-class"
            onEditorStateChange={handleEditorStateChange("description")}
            wrapperStyle={{ background: "white", boxShadow: "0 0 2px grey" }}
            editorStyle={{ margin: "0 10px", height: "15vw", minHeight: 100 }}
          />
        </div>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={button}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default withRouter(BasicInfoForm);
