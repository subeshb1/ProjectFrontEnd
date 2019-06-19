import React from 'react';
import { Paper, Divider } from '@material-ui/core';
import useStyles from '../styles.js';

//structure of data fetched
/* const companies = [
    {
        name: "Company Company Company Name 1",
        jobs: [
            { title: "Frontend Developer Developer", deadline: "25 aug" },
            { title: "Backend Developer Developer", deadline: "25 aug" }
        ],
        imageName: "comp1.png", imageLabel: "company logo 1", redirectLink: ""
    },
    {
        name: "Company Company Company Name 2",
        jobs: [
            { title: "Frontend Developer Developer", deadline: "25 aug" },
            { title: "Backend Developer Developer", deadline: "25 aug" }
        ],
        imageName: "comp2.png", imageLabel: "company logo 2", redirectLink: ""
    },
    {
        name: "Company Company Company Name 3",
        jobs: [
            { title: "Frontend Developer Developer", deadline: "25 aug" },
            { title: "Backend Developer Developer", deadline: "25 aug" }
        ],
        imageName: "comp3.png", imageLabel: "company logo 3", redirectLink: ""
    },
    {
        name: "Company Company Company Name 4",
        jobs: [
            { title: "Frontend Developer Developer", deadline: "25 aug" },
            { title: "Backend Developer Developer", deadline: "25 aug" }
        ],
        imageName: "comp4.png", imageLabel: "company logo 4", redirectLink: ""
    },
    {
        name: "Company Company Company Name 5",
        jobs: [
            { title: "Frontend Developer Developer", deadline: "25 aug" },
            { title: "Backend Developer Developer", deadline: "25 aug" }
        ],
        imageName: "comp1.png", imageLabel: "company logo 5", redirectLink: ""
    },
    {
        name: "Company Company Company Name 6",
        jobs: [
            { title: "Frontend Developer Developer", deadline: "25 aug" },
            { title: "Backend Developer Developer", deadline: "25 aug" }
        ],
        imageName: "comp2.png", imageLabel: "company logo 6", redirectLink: ""
    },
    {
        name: "Company Company Company Name 7",
        jobs: [
            { title: "Frontend Developer Developer", deadline: "25 aug" },
            { title: "Backend Developer Developer", deadline: "25 aug" }
        ],
        imageName: "comp1.png", imageLabel: "company logo 5", redirectLink: ""
    },
    {
        name: "Company Company Company Name 8",
        jobs: [
            { title: "Frontend Developer Developer", deadline: "25 aug" },
            { title: "Backend Developer Developer", deadline: "25 aug" }
        ],
        imageName: "comp2.png", imageLabel: "company logo 6", redirectLink: ""
    }
] */

function JobPosted({ postType,  companies}) {
    const { root, title, titleLine, titleText, wrapper, paper, companyTitle, logo, list } = useStyles();

    return (

        <div className={root}>

            <div className={title}>
                <span className={titleLine}> </span>
                {postType}  <span className={titleText} >JOBS</span>
                <span className={titleLine}> </span>
            </div>
            <section className={wrapper}>
                {
                    companies.map(company => {
                        return (
                            <Paper className={paper} key={company.name}>
                                <h4 className={companyTitle} title={company.name}>
                                    {company.name}
                                </h4>
                                <Divider/>
                                <div style={{ display: 'flex' }}>
                                    <img
                                        src={require(`../../assets/images/CompanyLogos/${company.imageName}`)}
                                        alt="Company 1" className={logo}
                                    />
                                    <ul className={list}>
                                        {company.jobs.map( (job,i) =>
                                            <li title={`${job.title}-deadline: ${job.deadline}`}
                                                key={job.title+i}
                                            >
                                                {job.title}
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </Paper>
                        );
                    })
                }


            </section>
        </div>

    );
}

export default JobPosted;