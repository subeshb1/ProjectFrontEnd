import React, { useState } from "react";
import { TextField,Button } from "@material-ui/core";
//date
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
//select
import Select from "react-select";
//styles
import { useStyles } from "./styles.js";

//just a component. **NOTE: not a form**
export default function EducationInfoForm() {
  const [state, setState] = useState([
    {
      program: "",
      degree: "",
      categories: [],
      start_date: new Date(),
      end_date: new Date()
    }
  ]);

  //Handlers
  const handleInputChange = i => name => ({target:{value}}) => {
    setState(state => {
      state[i] = {
        ...state[i],
        [name]: value
      };
      return [...state];
    });
  };

  const handleCustomChange = i => name => value => {
    setState(state => {
        state[i] = {
          ...state[i],
          [name]: value
        };
        return [...state];
      });
  };

  const addEducation = () => setState( state => [...state, {
    program: "",
    degree: "",
    categories: [],
    start_date: new Date(),
    end_date: new Date()
  }])
  return <div>{state.map((x, i) => (
    <EducationComponent
    key={i}
      {...{
        ...x,
        handleInputChange: handleInputChange(i),
        handleCustomChange: handleCustomChange(i)
      }}
    />
  ))}
  <Button onClick={addEducation}>Add</Button>
  </div>
}

const EducationComponent = ({
  program,
  degree,
  handleInputChange,
  start_date,
  end_date,
  categories,
  handleCustomChange
}) => {
  const { root, form, inputField } = useStyles();
  const degreesOptions = [
    { value: "Master", label: "Master" },
    { value: "Bachelor", label: "Bachelor" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "SLC/SEE", label: "SLC/SEE" },
    { value: "Other", label: "Other" },
    { value: "Ph. D.", label: "Ph. D." }
  ];

  const categoriesOptions = [
    { value: "Agriculture", label: "Agriculture" },
    { value: "Ayurved", label: "Ayurved" },
    { value: "Computer and IT", label: "Computer and IT" },
    { value: "Education", label: "Education" },
    { value: "Engineering", label: "Engineering" },
    {
      value: "Law, public safety and security",
      label: "Law, public safety and security"
    },
    { value: "Management", label: "Management" },
    { value: "Medicine and Health Care", label: "Medicine and Health Care" },
    { value: "Nursing", label: "Nursing" },
    { value: "Pharmacy", label: "Pharmacy" },
    { value: "Science and Technology", label: "Science and Technology" }
  ];

  return (
    <div className={root}>
      <div className={form}>
        <TextField
          label="Program"
          className={inputField}
          value={program}
          onChange={handleInputChange("program")}
          margin="normal"
          required
        />

        <Select
          value={degree}
          onChange={handleCustomChange("degree")}
          options={degreesOptions}
          className={inputField}
          placeholder="Select degree"
        />

        <div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              value={start_date}
              onChange={handleCustomChange("start_date")}
              label="Start Date"
              className={inputField}
              format="yyyy/MM/dd"
            />

            <KeyboardDatePicker
              value={end_date}
              onChange={handleCustomChange("end_date")}
              label="End Date"
              className={inputField}
              format="yyyy/MM/dd"
            />
          </MuiPickersUtilsProvider>
        </div>

        <Select
          value={categories}
          onChange={handleCustomChange("categories")}
          isMulti
          options={categoriesOptions}
          className={inputField}
          placeholder="Select Category"
        />
      </div>
    </div>
  );
};
