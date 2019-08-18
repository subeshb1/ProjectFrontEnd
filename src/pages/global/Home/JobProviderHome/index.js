import React, { useState, useEffect } from "react";
import { ContainerLoad } from "components/Loading";
import { useSnackbar } from "notistack";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie
} from "recharts";

import { StartEndDateSelect } from "components/CustomSelect/index.js";

const TotalDiv = ({ label, value }) => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "10px 20px",
        background: "whitesmoke",
        margin: 10
      }}
    >
      <h3>{label}</h3>
      <h2>{value}</h2>
    </div>
  );
};

const LineChartCustom = ({ data }) => {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
};

const PieChartCustom = ({ data }) => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
  );
};
export default function index() {
  const [data, setData] = useState({});
  const [fetching, setFetching] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const fetchData = () => {
    setFetching(true);
    axios
      .get("/api/v1/profile/job_stats")
      .then(res => {
        setData(res.data);
      })
      .catch(() =>
        enqueueSnackbar("Error Fetching data", {
          variant: "error",
          autoHideDuration: 4000
        })
      )
      .finally(() => setFetching(false));
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (fetching) return <ContainerLoad />;

  return (
    <div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <StartEndDateSelect
          start_date={null}
          end_date={null}
          handleChange={() => {}}
        />
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <TotalDiv label="Total Jobs" value={data.total_jobs} />
        <TotalDiv label="Total Open Jobs" value={data.total_open_jobs} />
        <TotalDiv label="Total Applicants" value={data.total_applicants} />
        <TotalDiv label="Total Job Views" value={data.total_views} />
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <LineChartCustom />
        <LineChartCustom />
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <PieChartCustom />
        <PieChartCustom />
      </div>
    </div>
  );
}
