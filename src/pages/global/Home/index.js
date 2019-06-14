import React from "react";
import workImage from "assets/images/work.jpg";
import { makeStyles } from "@material-ui/core/styles";
//components
import { CategoryContainer } from "components";
import JobPosted  from "components/JobPosted";

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
  return (
    <div>
      <div className={imgContainer}>
        <img src={workImage} alt="Work" className={image} />
      </div>
      <JobPosted name="RECOMMENDED"/>
      <JobPosted name="TOP"/>
      <JobPosted name="RECENT"/>
      <CategoryContainer />
    </div>
  );
}
