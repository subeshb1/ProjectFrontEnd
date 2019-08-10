import React, { useEffect } from "react";
//component
import Quiz from "components/Quiz";
import axios from "axios";

export default function Test({
  match: {
    params: { id }
  }
}) {
  const [exam, setExam] = React.useState(null);
  useEffect(() => {
    axios
      .get(`/api/v1/exams/${id}`)
      .then(res => {
        setExam(exams => (res.data))
      })
      .catch(() => {});
  }, []);
  return <>{exam && <Quiz {...exam} />}</>;
}
