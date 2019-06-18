import React from "react";
import _ from "lodash";
import Select from "react-select";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const selectValue = (options, value) => _.find(options, { value });
const selectMultiValue = (options, values) =>
  _.filter(options, c =>
    values.map(x => x.toLowerCase()).includes(c.value.toLowerCase())
  );

export function CategorySelect({ categories, isMulti = true, ...rest }) {
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
    <CustomSelect
      options={categoriesOptions}
      value={categories}
      valueName="categories"
      placeholder="Select Categories"
      isMulti={isMulti}
      {...rest}
    />
  );
}

export function DegreeSelect({ degree, ...rest }) {
  const degreesOptions = [
    { value: "Master", label: "Master" },
    { value: "Bachelor", label: "Bachelor" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "SLC/SEE", label: "SLC/SEE" },
    { value: "Other", label: "Other" },
    { value: "Ph. D.", label: "Ph. D." }
  ];
  return (
    <CustomSelect
      options={degreesOptions}
      value={degree}
      valueName="degree"
      placeholder="Select Degree"
      {...rest}
    />
  );
}

export function GenderSelect({ gender, ...rest }) {
  const gendersOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" }
  ];
  return (
    <CustomSelect
      options={gendersOptions}
      value={gender}
      valueName="gender"
      placeholder="Select Gender"
      {...rest}
    />
  );
}

export function StartEndDateSelect({
  start_date,
  end_date,
  handleChange,
  className,
  ...rest
}) {
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          value={start_date}
          onChange={handleChange("start_date")}
          label="Start Date"
          inputVariant="outlined"
          format="yyyy/MM/dd"
          className={className}
          {...rest}
        />

        <KeyboardDatePicker
          value={end_date}
          onChange={handleChange("end_date")}
          label="End Date"
          className={className}
          inputVariant="outlined"
          format="yyyy/MM/dd"
          {...rest}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export function JobLevelSelect({ level, ...rest }) {
  const levelsOptions = [
    { value: "entry_level", label: "Entry Level" },
    { value: "mid_level", label: "Mid Level" },
    { value: "senior_level", label: "Senior Level" },
    { value: "top_level", label: "Top Level" }
  ];
  return (
    <CustomSelect
      options={levelsOptions}
      value={level}
      valueName="level"
      placeholder="Select Job Level"
      {...rest}
    />
  );
}

export function JobTypeSelect({ job_type, ...rest }) {
  const jobTypeOptions = [
    { value: "full_time", label: "Full Time" },
    { value: "contract", label: "Contract" },
    { value: "part_time", label: "Part Time" },
    { value: "internship", label: "Internship" }
  ];
  return (
    <CustomSelect
      options={jobTypeOptions}
      value={job_type}
      valueName="job_type"
      placeholder="Select Job"
      {...rest}
    />
  );
}

export default function CustomSelect({
  options,
  value,
  handleChange,
  isMulti = false,
  valueName,
  ...rest
}) {
  return (
    <Select
      style={{
        menuPortal: base => {
          const { zIndex, ...rest } = base; // remove zIndex from base by destructuring
          return { ...rest, zIndex: 9999 };
        }
      }}
      isMulti={isMulti}
      value={
        isMulti ? selectMultiValue(options, value) : selectValue(options, value)
      }
      onChange={
        isMulti
          ? data => handleChange(valueName)(data ? data.map(x => x.value) : [])
          : ({ value }) => handleChange(valueName)(value)
      }
      options={options}
      {...rest}
    />
  );
}
