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

import _ from "lodash";
import { withRouter } from "react-router-dom";
//datepicker
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
//draft (for description)
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML
} from "draft-js";

import { CategorySelect } from "components/CustomSelect/index.js";

import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
//styles
import { useStyles } from "./styles.js";

import { ContainerLoad } from "components/Loading";

function BasicInfoForm({ history }) {
  const { root, form, inputField, button } = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { loading, setLoading } = useContext(LoadContext);
  const [fetching, setFetching] = useState(false);
  //jobseeker information
  const [state, setState] = useState({
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
    organization_type: "",
    address: {
      //object
      permanent: ""
    },
    categories: [],
    established_date: new Date()
  });

  useEffect(() => {
    setFetching(true);
    axios
      .get("api/v1/profile/basic_info")
      .then(res => {
        try {
          handleEditorStateChange("description")(
            EditorState.createWithContent(
              ContentState.createFromBlockArray(
                convertFromHTML(res.data.description || "<p></p>")
              )
            )
          );
        } catch {}
        let state = _.omit(res.data, [
          "birth_date",
          "gender",
          "avatar"
        ]);
        state.description = state.description || "";
        setState(
          _.mapValues(state, function(o) {
            return o === undefined ? "" : o;
          })
        );
      })
      .catch(() =>
        enqueueSnackbar("Error Fetching data", {
          variant: "error",
          autoHideDuration: 4000
        })
      )
      .finally(() => setFetching(false));
  }, []);
  //state: date

  //description (object)
  const [editorState, setEditorState] = useState({
    description: EditorState.createEmpty() //object
  });

  //Handlers

  //single property handlers
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
  };
  //address
  const handleAddressChange = event => {
    setState({
      ...state,
      address: {
        ...state.address,
        [event.target.name]: event.target.value
      }
    });
  };

  //date
  const handleDateChange = date => {
    setState({ ...state, established_date: date });
  };

  //phone_numbers
  const handlePhoneNumberChange = event => {
    setState({
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
    setState({
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
    setState(state => ({
      ...state,
      [name]: descriptionString
    }));
  };
  const handleCustomChange = name => value =>
    setState(state => ({ ...state, [name]: value }));

  const handleSubmit = evt => {
    evt.preventDefault();
    setLoading(true);
    return axios
      .put("api/v1/profile/basic_info", { ...state })
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          enqueueSnackbar("Basic Information Saved!", {
            variant: "success",
            autoHideDuration: 2500
          });
        }
      })
      .catch(error => {
        console.log({ ...error });
        let message = error.message.includes(422)
          ? "Looks like there are some issues in the form!"
          : "Unable to connect to the server";
        enqueueSnackbar(message, { variant: "error", autoHideDuration: 4000 });
      })
      .finally(() => setLoading(false));
  };

  if (fetching) return <ContainerLoad />;
  return (
    <div className={root}>
      <form
        className={form}
        validate="true"
        onSubmit={evt => !loading && handleSubmit(evt)}
      >
        <h1> BASIC INFORMATION </h1>
        <TextField
          id="name"
          label="Company Name"
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
          value={state.address.permanent || ""}
          onChange={handleAddressChange}
          margin="normal"
          name="permanent"
          variant="outlined"
          required
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            value={state.established_date}
            onChange={handleDateChange}
            label="Established Date"
            className={inputField}
            maxDate={new Date()}
            inputVariant="outlined"
            format="yyyy/MM/dd"
            required
          />
        </MuiPickersUtilsProvider>

        <div>
          <TextField
            id="phone_numbers_personal"
            label="Contact Number"
            className={inputField}
            value={state.phone_numbers.personal || ""}
            onChange={handlePhoneNumberChange}
            variant="outlined"
            name="personal"
            required
          />

          <TextField
            id="phone_numbers_home"
            label="Telephone Number"
            className={inputField}
            value={state.phone_numbers.home || ""}
            onChange={handlePhoneNumberChange}
            margin="normal"
            variant="outlined"
            name="home"
          />
          <TextField
            id="social_accounts_facebook"
            label="Facebook"
            className={inputField}
            value={state.social_accounts.facebook || ""}
            onChange={handleSocialAccountsChange}
            margin="normal"
            name="facebook"
            variant="outlined"
          />
        </div>

        <TextField
          id="website"
          label="Website"
          className={inputField}
          value={state.website}
          onChange={handleChange("website")}
          variant="outlined"
          margin="normal"
        />

        <div className={inputField}>
          <FormControl component="fieldset" required>
            <FormLabel component="legend">Organization Type</FormLabel>
            <RadioGroup
              aria-label="Organization Type"
              name="organization_type"
              required
              value={state.organization_type}
              onChange={handleChange("organization_type")}
            >
              <FormControlLabel
                value="small"
                control={<Radio color="primary" />}
                label="Small"
                required
              />
              <FormControlLabel
                value="medium"
                control={<Radio color="primary" />}
                label="Medium"
                required
              />
              <FormControlLabel
                value="large"
                required
                control={<Radio color="primary" />}
                label="Large"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={inputField} style={{ zIndex: "100" }}>
          <p style={{ margin: "15px 0" }}>Company category</p>
          <CategorySelect
            categories={state.categories}
            handleChange={handleCustomChange}
          />
        </div>
        <div className={inputField}>
          <p style={{ margin: "15px 0" }}>About the company</p>
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
