import React, { useEffect } from "react";
//component
import { CategoryContainer } from "components/";
import axios from "axios";
const categoryItems = {
  title1: "SELECT A",
  title2: "TEST",
  jobs: []
};

export default function TestComponent() {
  const [exams, setExams] = React.useState(categoryItems);
  useEffect(() => {
    axios
      .get("/api/v1/exams")
      .then(res => {
        setExams(exams => ({
          ...exams,
          jobs: res.data.map(x => ({
            title: x.name,
            link: `/jobseeker/test/${x.id}`
          }))
        }));
      })
      .catch(() => {});
  },[]);
  return <CategoryContainer {...exams} />;
}
