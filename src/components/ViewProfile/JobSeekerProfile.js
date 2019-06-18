import React from "react";
import { Avatar, Divider } from "@material-ui/core";
import useStyles from "./styles.js";
import Chip from "@material-ui/core/Chip";

const splitAndCapitalize = str =>
  str?str.split("_")
    .map(x => x[0].toUpperCase() + x.slice(1))
    .join(" "):"";

function ViewProfile({
  profileData: {
    basic_info: {
      name,
      avatar: avatar_url,
      address: { permanent },
      phone_numbers: { personal, home },
      birth_date,
      social_accounts: { facebook },
      website,
      categories,
      gender,
      description: aboutMe
    },
    user: { email },
    work_experiences,
    educations
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

  return (
    <div>
      <div className={wrapper}>
        <section className={avatarContainer}>
          <Avatar alt="Male" src={avatar_url} className={avatar} />
        </section>
        <section style={{ textAlign: "center" }}>
          <h2>Name: {name}</h2>
        </section>
        <Divider />
        <section className={container}>
          <section className={informationContainer}>
            <h2> Basic information </h2>
            <Divider />
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
                <div> {birth_date && new Date(birth_date).toDateString()} </div>
              </div>
              <div className={record}>
                <div className={title}>Gender </div>
                <div> {splitAndCapitalize(gender)} </div>
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

          <section className={informationContainer}>
            <h2> Job Preference </h2>
            <Divider />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className={record}>
                <div>
                  {categories.map((x, i) => (
                    <Chip
                      key={i}
                      label={x}
                      style={{ margin: 10 }}
                      clickable
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </section>

        <div className={description}>
          <h2>About Me</h2>
          <div dangerouslySetInnerHTML={{ __html: aboutMe }} />
        </div>

        <section className={container}>
          <section className={informationContainer} style={{ width: "100%" }}>
            <h2 style={{ textAlign: "center" }}> Working Experience </h2>
            <Divider />
            <div className={blockGroup}>
              {work_experiences.map(company => (
                <div className={eachBlock}>
                  <div className={record}>
                    <div className={title}>Job title </div>
                    <div> {company.job_title} </div>
                  </div>
                  <div className={record}>
                    <div className={title}>Company Name </div>
                    <div>{company.organization_name}</div>
                  </div>
                  <div className={record}>
                    <div className={title}> Level </div>
                    <div> {splitAndCapitalize(company.level)}</div>
                  </div>
                  <div className={record}>
                    <div className={title}> Time period </div>
                    <div>
                      {new Date(company.start_date).toDateString()} -{" "}
                      {new Date(company.end_date).toDateString()}
                    </div>
                  </div>
                  <div className={record}>
                    <div className={title}> Salary </div>
                    <div> Rs. {company.salary} </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>

        <Divider />
        <section className={container}>
          <section className={informationContainer} style={{ width: "100%" }}>
            <h2 style={{ textAlign: "center" }}>Educational Qualifications</h2>
            <Divider />
            <div className={blockGroup}>
              {educations.map(education => (
                <div class={eachBlock}>
                  <div className={record}>
                    <div className={title}> Program </div>
                    <div> {education.program} </div>
                  </div>
                  <div className={record}>
                    <div className={title}> Degree </div>
                    <div>{education.degree}</div>
                  </div>
                  <div className={record}>
                    <div className={title}> Time Period </div>
                    <div>
                      {new Date(education.start_date).toDateString()} - {new Date(education.end_date).toDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default ViewProfile;
