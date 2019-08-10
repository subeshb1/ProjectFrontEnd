import React, { useEffect } from "react";
import { Avatar, Divider } from "@material-ui/core";
import useStyles from "./styles.js";
import { Link } from "react-router-dom";
import JobCard from "components/JobCard";
import axios from "axios";
const splitAndCapitalize = str =>
  str
    ? str
        .split("_")
        .map(x => x[0].toUpperCase() + x.slice(1))
        .join(" ")
    : "";

function ViewProfile({
  profileData: {
    basic_info: {
      name,
      avatar: avatar_url,
      address: { permanent },
      phone_numbers: { personal, home },
      organization_type,
      established_date,
      social_accounts: { facebook },
      website,
      description: aboutMe
    },
    user: { email, uid }
  }
}) {
  const {
    wrapper,
    avatarContainer,
    avatar,
    container,
    informationContainer,
    record,
    title,
    description,
    blockGroup,
    eachBlock
  } = useStyles();
  const [jobVacancies, setJobVacancies] = React.useState([]);
  useEffect(() => {
    axios
      .get("api/v1/jobs", {
        params: { page: 1, per_page: 4, job_provider_id: [uid] }
      })
      .then(res => {
        setJobVacancies(res.data.data);
      });
  }, []);
  return (
    <div>
      <div className={wrapper}>
        <section className={avatarContainer}>
          <Avatar alt="Female" src={avatar_url} className={avatar} />
        </section>
        <section style={{ textAlign: "center" }}>
          <h2>{name}</h2>{" "}
        </section>
        <Divider />
        <section className={container}>
          <section className={informationContainer}>
            <div>
              <div className={record}>
                <div className={title}>Address</div>
                <div>{permanent}</div>
              </div>
              <div className={record}>
                <div className={title}> Phone </div>
                <div>
                  <div>{home}</div>
                  <div>{personal}</div>
                </div>
              </div>
              <div className={record}>
                <div className={title}>Email</div>
                <div> {email} </div>
              </div>
              <div className={record}>
                <div className={title}>DOB </div>
                <div>
                  {" "}
                  {established_date &&
                    new Date(established_date).toDateString()}{" "}
                </div>
              </div>
              <div className={record}>
                <div className={title}>Organization Type </div>
                <div>{splitAndCapitalize(organization_type)}</div>
              </div>
              <div className={record}>
                <div className={title}>Social Accounts </div>
                <div>
                  <div>{facebook}</div>
                </div>
              </div>
              <div className={record}>
                <div className={title}>Website </div>
                <div> {website} </div>
              </div>
            </div>
          </section>
        </section>

        <div className={description}>
          <h2>About Us</h2>
          <div dangerouslySetInnerHTML={{ __html: aboutMe }} />
        </div>

        <section>
          <section>
            <h2 style={{ textAlign: "center" }}> Job Vacancy </h2>
            <Link
              to={`/search?job_provider_id=${uid}`}
              style={{
                color: "#0d62bf",
                margin: 15,
                textDecoration: "underline",
                fontSize: 18
              }}
            >
              View All
            </Link>
            <Divider />
            {jobVacancies.length && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap"
                }}
              >
                {jobVacancies.map((vacancy, i) => (
                  <JobCard job={vacancy} key={i} />
                ))}
              </div>
            )}
          </section>
        </section>
      </div>
    </div>
  );
}

export default ViewProfile;
