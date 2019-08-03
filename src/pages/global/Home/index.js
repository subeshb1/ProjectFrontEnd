import React, { useContext, useEffect } from "react";
import workImage from "assets/images/work.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { CategoryContainer } from "components";
import { AuthContext } from "context/AuthProvider";
import { LoadContext } from "context/LoadBar";
import { ContainerLoad } from "components/Loading";
import JobSeekerHome from './JobSeekerHome';
import JobProviderHome from './JobProviderHome';

const useStyles = makeStyles({
  imgContainer: {
    width: "100%",
    position: "relative"
  },
  image: {
    width: "100%",
    maxHeight: "600px",
    objectFit: "contain"
  }
});

export default function Home() {
  const { imgContainer, image } = useStyles();
  const { role } = useContext(AuthContext);
  const { loading } = useContext(LoadContext);

  if (loading) return <ContainerLoad />;

  switch (role) {
    case "job_seeker":
      return (
        <JobSeekerHome />
      );
    case "job_provider":
      return (
        <JobProviderHome />
      );
    default:
      return (
        <div>
          <div className={imgContainer}>
            <img src={workImage} alt="Work" className={image} />
          </div>

          <CategoryContainer />
        </div>
      );
  }
}
