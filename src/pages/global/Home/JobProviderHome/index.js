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
  Pie,
  ResponsiveContainer
} from "recharts";

import { StartEndDateSelect } from "components/CustomSelect/index.js";
const splitAndCapitalize = str =>
  str
    ? str
        .split("_")
        .map(x => x[0].toUpperCase() + x.slice(1))
        .join(" ")
    : "";
const formatDate = currentDate =>
  currentDate.getFullYear() +
  "-" +
  (currentDate.getMonth() + 1).toString().padStart(2, 0) +
  "-" +
  currentDate
    .getDate()
    .toString()
    .padStart(2, 0);
const extractGraphData = (data, startDate, endDate, name = "label") => {
  const dates = Object.keys(data).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );
  endDate = endDate || new Date();
  let currentDate = startDate ? new Date(startDate) : new Date(dates[0]);
  const dataSet = [];
  while (
    currentDate.toDateString() != endDate.toDateString() &&
    currentDate.getTime() <= endDate.getTime()
  ) {
    dataSet.push({
      date: formatDate(currentDate),
      [name]: data[formatDate(currentDate)] || 0
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dataSet;
};

const extractPieChart = data => {
  return Object.entries(data).map(([name, value]) => ({ name:splitAndCapitalize(name||"Nil"), value }));
};

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

const LineChartCustom = ({ data, startDate, endDate, name }) => {
  const formatData = extractGraphData(data, startDate, endDate, name);
  return (
    <ResponsiveContainer width={"80%"} height={300}>
      <LineChart data={formatData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey={name}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

const PieChartCustom = ({ data,name }) => {
  const formatData = extractPieChart(data);
  return (
    <div style={{overflow:'hidden'}}>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={formatData}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
      <h4 style={{textAlign:'center', marginTop: '-50px'}}>{name}</h4>
    </div>
  );
};
export default function index() {
  const [data, setData] = useState({});
  const [fetching, setFetching] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const [{ start_date, end_date }, setDate] = useState({
    start_date: null,
    end_date: null
  });
  const fetchData = () => {
    setFetching(true);
    axios
      .get("/api/v1/profile/job_stats", {
        params: { time_min: start_date, time_max: end_date }
      })
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
      <form
        onSubmit={e => {
          e.preventDefault();
          fetchData();
        }}
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <StartEndDateSelect
          start_date={start_date}
          end_date={end_date}
          handleChange={date => value =>
            setDate(dates => ({ ...dates, [date]: value }))}
        />
        <input type="submit" value="" hidden />
      </form>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <TotalDiv label="Total Jobs" value={data.total_jobs} />
        <TotalDiv label="Total Open Jobs" value={data.total_open_jobs} />
        <TotalDiv label="Total Applicants" value={data.total_applicants} />
        <TotalDiv label="Total Job Views" value={data.total_views} />
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: 10
        }}
      >
        <LineChartCustom
          data={data.daily_views}
          startDate={start_date}
          endDate={end_date}
          name="Views"
        />
        <LineChartCustom
          data={data.daily_applicants}
          startDate={start_date}
          endDate={end_date}
          name="Applicants"
        />
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <PieChartCustom data={data.job_categories}name={"Job Categories"} />
        <PieChartCustom data={data.applicant_status} name={"Applicant Status"}/>
      </div>
    </div>
  );
}
