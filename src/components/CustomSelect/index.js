import React from "react";
import _ from "lodash";
import Select from "react-select";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const selectValue = (options, value) => _.find(options, { value });

export function CategorySelect({ categories=[], handleChange, ...rest }) {
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

  const getValues = () =>
    _.filter(categoriesOptions, c =>
      categories.map(x => x.toLowerCase()).includes(c.value.toLowerCase())
    );
  return (
    <Select
      value={getValues()}
      onChange={data => handleChange("categories")(data ? data.map(x => x.value) : []) }
      isMulti
      options={categoriesOptions}
      placeholder="Select Category"
      {...rest}
    />
  );
}

export function DegreeSelect({ degree, handleChange, ...rest }) {
  const degreesOptions = [
    { value: "Master", label: "Master" },
    { value: "Bachelor", label: "Bachelor" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "SLC/SEE", label: "SLC/SEE" },
    { value: "Other", label: "Other" },
    { value: "Ph. D.", label: "Ph. D." }
  ];
  return (
    <Select
      value={selectValue(degreesOptions, degree)}
      onChange={({ value }) => handleChange("degree")(value)}
      options={degreesOptions}
      placeholder="Select degree"
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
          format="yyyy/MM/dd"
          className={className}
          {...rest}
        />

        <KeyboardDatePicker
          value={end_date}
          onChange={handleChange("end_date")}
          label="End Date"
          className={className}
          format="yyyy/MM/dd"
          {...rest}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}
