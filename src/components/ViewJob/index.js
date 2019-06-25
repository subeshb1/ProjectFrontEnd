import React from "react";
import { Avatar, Divider, Button } from "@material-ui/core";
//styles
import useStyles from "../ViewProfile/styles.js";
import companyAvatar from "assets/images/avatar/company.jpg";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";
const splitAndCapitalize = str =>
  str
    ? str
        .split("_")
        .map(x => x[0].toUpperCase() + x.slice(1))
        .join(" ")
    : "";

function ViewJob({ job, onApply = () => {} }) {
  const {
    wrapper,
    avatarContainer,
    avatar,
    description,
    container,
    informationContainer,
    blockGroup,
    eachBlock,
    record,
    title,
    button
  } = useStyles();

  return (
    <div>
      <div className={wrapper} style={{ paddingBottom: 10 }}>
        <section className={avatarContainer}>
          <Avatar
            alt="Female"
            src={job.company_avatar || companyAvatar}
            className={avatar}
          />
        </section>
        <section style={{ textAlign: "center" }}>
          <h2>
            <Link to={`/profile/${job.company_uid}`}>{job.company_name}</Link>
          </h2>
        </section>
        <Divider />
        <h2 style={{ textAlign: "center", margin: "10px 0" }}>
          Job Description
        </h2>
        <section className={container} style={{ width: "100%" }}>
          <section className={informationContainer} >
            <h2> Basic Information </h2>
            <Divider />
            <div className={blockGroup}>
              <div className={eachBlock}>
                <div className={record}>
                  <div className={title}> Job Title </div>
                  <div style={{ fontWeight: "bold" }}> {job.job_title} </div>
                </div>
                <div className={record}>
                  <div className={title}> Seats available </div>
                  <div>{job.open_seats}</div>
                </div>
                <div className={record}>
                  <div className={title}> Job Level </div>
                  <div>{splitAndCapitalize(job.level)} </div>
                </div>
                <div className={record}>
                  <div className={title}> Salary </div>
                  <div>
                    Rs. {job.min_salary} - Rs. {job.max_salary}{" "}
                  </div>
                </div>
                <div className={record}>
                  <div className={title}> Job Type </div>
                  <div>{splitAndCapitalize(job.job_type)} </div>
                </div>

                <div className={record}>
                  <div className={title}> Job Category </div>
                  <div>
                    {job.categories.map((x, i) => (
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

                <div
                  className={record}
                  style={{ border: "1px solid #0000004d", borderRadius: 5 }}
                >
                  <div className={title}> Deadline </div>
                  <div>
                    {new Date(job.application_deadline).toDateString()}{" "}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={informationContainer}>
            <h2> Job Specification </h2>
            <Divider />
            <div className={blockGroup}>
              <div className={eachBlock}>
                <div className={record}>
                  <div className={title}>Education Degree</div>
                  <div> {job.job_specifications.degree.value.map(splitAndCapitalize).join(', ')} </div>
                </div>
                <div className={record}>
                  <div className={title}>Educaiton Program </div>
                  <div> {job.job_specifications.program.value.map(splitAndCapitalize).join(', ')}  </div>
                </div>
                <div className={record}>
                  <div className={title}>Experience Required </div>
                  <div> { job.job_specifications.experience.value && job.job_specifications.experience.value.join(', ') + " years"}  </div>
                </div>
                <div className={record}>
                  <div className={title}>Gender </div>
                  <div> {job.job_specifications.gender.value.map(splitAndCapitalize).join(', ')}  </div>
                </div>
                <div className={record}>
                  <div className={title}>Age </div>
                  <div> {job.job_specifications.age.min} - {job.job_specifications.age.max} years</div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <div className={description}>
          <h2>Description</h2>
          <div dangerouslySetInnerHTML={{ __html: job.description }} />
        </div>
        <Button
          variant="contained"
          color="primary"
          className={button}
          onClick={onApply}
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
}

export default ViewJob;
