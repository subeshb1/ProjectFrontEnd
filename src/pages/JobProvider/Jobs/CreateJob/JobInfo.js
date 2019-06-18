import React, { useState } from "react";
import {
  TextField,
  Button
} from "@material-ui/core";
import { useSnackbar } from "notistack";

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
  convertToRaw} from "draft-js";

import {
  CategorySelect,
  JobLevelSelect,
  JobTypeSelect
} from "components/CustomSelect/index.js";

import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
//styles
import { useStyles } from "./styles.js";


function JobInfo({ setPage, setJobInfo, jobInfo }) {
  const { root, form, inputField, button } = useStyles();
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  //jobseeker information
  const [state, setState] = useState(
    jobInfo || {
      job_title: "",
      open_seats: 1,
      level: "entry_level",
      min_salary: "",
      max_salary: "",
      description: "", //string
      application_deadline: tomorrow,
      job_type: "full_time",
      categories: []
    }
  );

  //description (object)
  const [editorState, setEditorState] = useState({
    description: EditorState.createEmpty() //object
  });

  //Handlers

  //single property handlers
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
  };

  //date
  const handleDateChange = date => {
    setState({ ...state, application_deadline: date });
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
    setJobInfo(state);
    setPage(1);
  };

  return (
    <div className={root}>
      <form
        className={form}
        validate="true"
        onSubmit={evt => handleSubmit(evt)}
      >
        <h1> Job information </h1>
        <TextField
          id="job_title"
          label="Job Title"
          className={inputField}
          value={state.job_title}
          onChange={handleChange("job_title")}
          variant="outlined"
          margin="normal"
          inputProps={{ minLength: "2" }}
          required
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            value={state.application_deadline}
            onChange={handleDateChange}
            label="Application Deadline"
            className={inputField}
            inputVariant="outlined"
            format="yyyy/MM/dd"
            required
            minDate={tomorrow}
          />
        </MuiPickersUtilsProvider>

        <div>
          <TextField
            id="open_seats"
            label="Open Seats"
            className={inputField}
            value={state.open_seats}
            onChange={({ target: { value } }) =>
              handleChange("open_seats")({
                target: { value: parseInt(value) }
              })
            }
            variant="outlined"
            margin="normal"
            type="number"
            inputProps={{ min: "1" }}
            required
          />
          <TextField
            id="min_salary"
            label="Min Salary"
            className={inputField}
            value={state.min_salary}
            onChange={({ target: { value } }) =>
              handleChange("min_salary")({
                target: { value: parseFloat(value) }
              })
            }
            variant="outlined"
            margin="normal"
            required
            type="number"
            inputProps={{ min: "0" }}
          />
          <TextField
            id="max_salary"
            label="Max Salary"
            className={inputField}
            value={state.max_salary}
            onChange={({ target: { value } }) =>
              handleChange("max_salary")({
                target: { value: parseFloat(value) }
              })
            }
            variant="outlined"
            margin="normal"
            required
            type="number"
            inputProps={{ min: "0" }}
          />
        </div>

        <div className={inputField}>
          <p style={{ margin: "15px 0" }}>Job Type</p>
          <JobTypeSelect
            job_type={state.job_type}
            handleChange={handleCustomChange}
          />
        </div>

        <div className={inputField}>
          <p style={{ margin: "15px 0" }}>Job Level</p>
          <JobLevelSelect
            level={state.level}
            handleChange={handleCustomChange}
          />
        </div>

        <div className={inputField}>
          <p style={{ margin: "15px 0" }}>Job Category</p>
          <CategorySelect
            categories={state.categories}
            handleChange={handleCustomChange}
          />
        </div>

        <div className={inputField}>
          <p style={{ margin: "15px 0" }}>Job Description</p>
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
          style={{
            margin: "0 0 0 auto"
          }}
        >
          Next
        </Button>
      </form>
    </div>
  );
}

export default withRouter(JobInfo);
