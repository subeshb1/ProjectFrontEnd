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
import Switch from "@material-ui/core/Switch";
import {
  CategorySelect,
  JobLevelSelect,
  JobTypeSelect,
  GenderSelect,
  DegreeSelect
} from "components/CustomSelect/index.js";

import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
//styles
import { useStyles } from "./styles.js";

import { ContainerLoad } from "components/Loading";

function JobInfo({ setPage, setJobInfo }) {
  const { root, form, inputField, button } = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  //jobseeker information
  const [state, setState] = useState({
    degree: {
      value: [],
      require: false
    },
    experience: {
      value: [],
      require: false
    },
    gender: {
      value: [],
      require: false
    },
    program: {
      value: [],
      require: false
    },
    age: {
      value: {
        min: 0,
        max: 100
      },
      require: false
    }
  });

  const handleCustomChange = name => value =>
    setState(state => ({
      ...state,
      [name]: {
        ...state[name],
        value
      }
    }));
  const handelRequiredChange = name => require =>
    setState(state => ({
      ...state,
      [name]: {
        ...state[name],
        require: state[name].require ? false : true
      }
    }));

  const handleSubmit = evt => {
    console.log(state);
    evt.preventDefault();
    setPage(1);
  };

  return (
    <div className={root}>
      <form
        className={form}
        validate="true"
        onSubmit={evt => handleSubmit(evt)}
      >
        <h1 style={{ margin: 0 }}> Job Specification </h1>
        <div style={{ zIndex: 1001 }}>
          <p>Degree</p>
          <DegreeSelect
            handleChange={handleCustomChange}
            isMulti
            degree={state.degree.value}
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.degree.require}
                onChange={handelRequiredChange("degree")}
              />
            }
            label="Require Degree?"
          />
        </div>

        <div style={{ zIndex: 1000 }}>
          <p>Program</p>
          <DegreeSelect
            handleChange={handleCustomChange}
            isMulti
            degree={state.program.value}
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.program.require}
                onChange={handelRequiredChange("program")}
              />
            }
            label="Require Program?"
          />
        </div>

        <div>
          <TextField
            id="experience"
            label="Experience"
            value={state.experience.value}
            onChange={({ target: { value } }) =>
              handleCustomChange("experience")(value)
            }
            variant="outlined"
            margin="normal"
            type="number"
            style={{ width: "100%" }}
            inputProps={{ min: "0", max: "30" }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.experience.require}
                onChange={handelRequiredChange("experience")}
              />
            }
            label="Require Experience?"
          />
        </div>

        <div >
          <p>Gender</p>
          <GenderSelect
            handleChange={handleCustomChange}
            isMulti
            gender={state.gender.value}
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.gender.require}
                onChange={handelRequiredChange("gender")}
              />
            }
            label="Require Gender?"
          />
        </div>

        <div style={{ display: "flex", marginTop: 10 }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={button}
            style={{
              margin: "0"
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={button}
            style={{
              margin: "0 0 0 auto"
            }}
          >
            Save Job
          </Button>
        </div>
      </form>
    </div>
  );
}

export default withRouter(JobInfo);
