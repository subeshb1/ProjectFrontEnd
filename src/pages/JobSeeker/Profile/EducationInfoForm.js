import React, { useState, useEffect, useContext } from "react";
import { Button } from "@material-ui/core";
//date
import DeleteIcon from "@material-ui/icons/Delete";
import { useStyles } from "./styles.js";
import axios from "axios";
import { useSnackbar } from "notistack";
import { LoadContext } from "context";

import {
  CategorySelect,
  DegreeSelect,
  StartEndDateSelect,
  ProgramSelect
} from "components/CustomSelect/index.js";
import { ContainerLoad } from "components/Loading";

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
  const [fetching, setFetching] = useState(false);

  const { container } = useStyles();
  const { loading, setLoading } = useContext(LoadContext);
  useEffect(() => {
    setFetching(true);
    axios
      .get("api/v1/profile/education")
      .then(res => res.data)
      .then(x => x.length && setState(x))
      .catch(() =>
        enqueueSnackbar("Error Fetching data", {
          variant: "error",
          autoHideDuration: 4000
        })
      )
      .finally(() => setFetching(false));
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
    setState(state => state.filter((_, index) => i !== index));
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    setLoading(true);
    return axios
      .put("api/v1/profile/education", { educations: state })
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          enqueueSnackbar("Education Saved!", {
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
    <form
      validate="true"
      className={container}
      onSubmit={evt => !loading && handleSubmit(evt)}
    >
      <h1> EDUCATION </h1>
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
        <ProgramSelect
          className={inputField}
          program={program}
          handleChange={handleCustomChange}
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
