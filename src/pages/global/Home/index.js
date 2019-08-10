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
      const categoryItems ={ 
       title1:"JOB",
       title2:"CATEGORIES", 
       jobs: [
          { title: "Agriculture", imageName: "agriculture", link: "" },
          { title: "Ayurved", imageName: "ayurved", link: "" },
          { title: "Computer and IT", imageName: "computer and IT", link: "" },
          { title: "Education", imageName: "education", link: "" },
          { title: "Engineering", imageName: "engineering", link: "" },
          { title: "Health", imageName: "health", link: "" },
          { title: "Law", imageName: "law", link: "" },
          { title: "Management", imageName: "management", link: "" },
          { title: "Nursing", imageName: "nursing", link: "" },
          { title: "Pharmacist", imageName: "pharmacist", link: "" },
          { title: "Science", imageName: "science", link: "" }
        ] 
      };
      
      return (
        <div>
          <div className={imgContainer}>
            <img src={workImage} alt="Work" className={image} />
          </div>

          <CategoryContainer  {...categoryItems}  />
        </div>
      );
  }
}
