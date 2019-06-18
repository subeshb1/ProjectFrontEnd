import React, { useState } from "react";
import { TextField, FormControlLabel, Button } from "@material-ui/core";

import { withRouter } from "react-router-dom";
import Switch from "@material-ui/core/Switch";
import {
  ProgramSelect,
  GenderSelect,
  DegreeSelect
} from "components/CustomSelect/index.js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
//styles
import { useStyles } from "./styles.js";

function JobInfo({
  setPage = () => {},
  setJobSpecification,
  saveJob,
  jobSpecification,
  update = false
}) {
  const { root, form, button } = useStyles();
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  //jobseeker information
  const [state, setState] = useState(
    jobSpecification || {
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
        min: 0,
        max: 100,
        require: false
      }
    }
  );

  const handleAgeChange = name => value => {
    setState(state => ({
      ...state,
      age: {
        ...state.age,
        [name]: parseInt(value)
      }
    }));
  };
  const handleCustomChange = name => value =>
    setState(state => ({
      ...state,
      [name]: {
        ...state[name],
        value
      }
    }));
  const handelRequiredChange = name => () =>
    setState(state => ({
      ...state,
      [name]: {
        ...state[name],
        require: state[name].require ? false : true
      }
    }));

  const handleSubmit = evt => {
    evt.preventDefault();
    setJobSpecification(state);
    saveJob(state);
  };
  const handleBack = evt => {
    setJobSpecification(state);
    evt.preventDefault();
    setPage(0);
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
          <ProgramSelect
            handleChange={handleCustomChange}
            isMulti
            program={state.program.value}
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
              handleCustomChange("experience")([value])
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
        <div>
          <p>Age</p>
          <TextField
            id="age-min"
            label="Min Age"
            value={state.age.min}
            onChange={({ target: { value } }) => handleAgeChange("min")(value)}
            variant="outlined"
            margin="normal"
            style={{ width: "50%" }}
            type="number"
            inputProps={{ min: "0", max: "100" }}
          />
          <TextField
            id="age-max"
            label="Max Age"
            value={state.age.max}
            onChange={({ target: { value } }) => handleAgeChange("max")(value)}
            variant="outlined"
            margin="normal"
            style={{ width: "50%" }}
            type="number"
            inputProps={{ min: "0", max: "100" }}
          />
          <FormControlLabel
            style={{ width: "100%" }}
            control={
              <Switch
                checked={state.age.require}
                onChange={handelRequiredChange("age")}
              />
            }
            label="Require Age Check?"
          />
        </div>
        <div>
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
          {!update && (
            <Button
              variant="contained"
              color="primary"
              className={button}
              style={{
                margin: "0"
              }}
              onClick={handleBack}
            >
              Back
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={button}
            style={{
              margin: "0 0 0 auto"
            }}
          >
            {update ? "Save" : "Save Job"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default withRouter(JobInfo);
