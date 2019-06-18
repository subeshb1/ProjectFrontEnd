import React, { useContext, useEffect } from "react";
import workImage from "assets/images/work.jpg";
import { makeStyles } from "@material-ui/core/styles";
//components
import { CategoryContainer } from "components";

import { AuthContext } from "context/AuthProvider";


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

export default function Home({ history }) {
  const { imgContainer, image } = useStyles();
  // const { role } = useContext(AuthContext);
  // useEffect(() => {
  //   switch (role) {
  //     case "job_seeker":
  //       history.push("/jobseeker");
  //       break;
  //     case "job_provider":
  //       history.push("/jobprovider");
  //       break;
  //     default:
  //       break;
  //   }
  // }, [role]);
  return (
    <div>
      <div className={imgContainer}>
        <img src={workImage} alt="Work" className={image} />
      </div>
      
      <CategoryContainer />
    </div>
  );
}
