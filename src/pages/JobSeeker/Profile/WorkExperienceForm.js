import React, { useState, useEffect, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
//date
import DeleteIcon from "@material-ui/icons/Delete";
import { useStyles } from "./styles.js";
import axios from "axios";
import { useSnackbar } from "notistack";
import { LoadContext } from "context";

import _ from "lodash";
import {
  CategorySelect,
  DegreeSelect,
  StartEndDateSelect
} from "components/CustomSelect/index.js";

export default function EducationInfoForm() {
  const [state, setState] = useState([
    {
      program: "",
      start_date: new Date(),
      end_date: new Date(),

      categories: [],
      degree: ""
    }
  ]);
  const { container } = useStyles();
  const { loading, setLoading } = useContext(LoadContext);
  useEffect(() => {
    axios
      .get("api/v1/profile/education")
      .then(res => res.data)
      .then(x => x.length && setState(x));
  }, []);
  const { enqueueSnackbar } = useSnackbar();

  //Handlers
  const handleInputChange = i => name => ({ target: { value } }) => {
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

  const addEducation = () =>
    setState(state => [
      ...state,
      {
        program: "",
        degree: "",
        categories: [],
        start_date: new Date(),
        end_date: new Date()
      }
    ]);
  const deleteEducation = i => () => {
    setState(state => state.filter((_, index) => i != index));
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    setLoading(true);
    return axios
      .put("api/v1/profile/education", { educations: state })
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
  return (
    <form
      validate="true"
      className={container}
      onSubmit={evt => !loading && handleSubmit(evt)}
    >
      {state.map((x, i) => (
        <EducationComponent
          key={i}
          {...{
            ...x,
            handleInputChange: handleInputChange(i),
            handleCustomChange: handleCustomChange(i),
            deleteEducation: deleteEducation(i)
          }}
        />
      ))}
      <Button
        variant="contained"
        color="secondary"
        style={{
          color: "white",
          background: "#239000",
          justifySelf: "self-end",
          marginRight: 20
        }}
        type="submit"
      >
        Save
      </Button>
      <Button
        variant="contained"
        color="secondary"
        style={{
          color: "white",
          background: "#42b7b7",
          justifySelf: "self-end"
        }}
        onClick={addEducation}
      >
        Add
      </Button>
    </form>
  );
}

const EducationComponent = ({
  program,
  degree,
  handleInputChange,
  start_date,
  end_date,
  categories,
  handleCustomChange,
  deleteEducation
}) => {
  const { root, form, inputField } = useStyles();

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
        <DegreeSelect
          className={inputField}
          degree={degree}
          handleChange={handleCustomChange}
        />
        <div>
          <StartEndDateSelect
            start_date={start_date}
            end_date={end_date}
            handleChange={handleCustomChange}
            className={inputField}
          />
        </div>

        <CategorySelect
          className={inputField}
          categories={categories}
          handleChange={handleCustomChange}
        />
        <Button
          variant="contained"
          color="secondary"
          className={inputField}
          style={{
            color: "white",
            background: "#b74242",
            justifySelf: "self-end"
          }}
          onClick={deleteEducation}
        >
          Delete
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};
