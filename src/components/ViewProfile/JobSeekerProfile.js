import React from 'react';
import { Avatar, Divider } from '@material-ui/core';
import useStyles from './styles.js';


let companiesWorked = [
    {
        job_title: "Frontend Developer", organization_name: "Company Name", start_date: "start_date",
        end_date: "end_date", salary: 10000, level: "entry level", description: "I've completed 5 projects"
    },
    {
        job_title: "Full Stack Developer", organization_name: "Company Name", start_date: "start_date",
        end_date: "end_date", salary: 20000, level: "Senior", description: "I've completed 15 projects"
    },
    {
        job_title: "Full Stack Developer", organization_name: "Company Name", start_date: "start_date",
        end_date: "end_date", salary: 20000, level: "Senior", description: "I've completed 15 projects"
    }
]

let educations = [
    { program: "Science", degree: "Intermediate level", start_date: "start_date", end_date: "end_date" },
    { program: "CSIT", degree: "Bachelors", start_date: "start_date", end_date: "end_date" }
]

function ViewProfile() {
    const {
        wrapper, avatarContainer, avatar, container, informationContainer, record, title, description,
        blockGroup, eachBlock
    } = useStyles();

    return (
        <div>
            <div className={wrapper}>
                <section className={avatarContainer}>
                    <Avatar alt="Male" src={require('../../assets/images/avatar/male.png')} className={avatar} />
                </section>
                <section style={{ textAlign: 'center' }}>
                    <h2>Name</h2>
                </section>
                <Divider />
                <section className={container}>
                    <section className={informationContainer}>
                        <h2> Basic information </h2>
                        <Divider />
                        <div>
                            <div className={record}>
                                <div className={title}>Address</div>
                                <div>address </div>
                            </div>
                            <div className={record}>
                                <div className={title}> Phone </div>
                                <div>
                                    <div>phone_number 1</div>
                                    <div>phone_number 2</div>
                                </div>
                            </div>
                            <div className={record}>
                                <div className={title}>Email</div>
                                <div> tashi_test@gmail.com </div>
                            </div>
                            <div className={record}>
                                <div className={title}>DOB </div>
                                <div> birth_date </div>
                            </div>
                            <div className={record}>
                                <div className={title}>Social Accounts </div>
                                <div>
                                    <div>facebook.com/ramkumar</div>
                                    <div> twitter.com/ramkumar </div>
                                </div>
                            </div>
                            <div className={record}>
                                <div className={title}>Website </div>
                                <div> website </div>
                            </div>

                        </div>
                    </section>

                    <section className={informationContainer}>
                        <h2> Job Preference </h2>
                        <Divider />
                        <div>
                            <div className={record}>
                                <div className={title}>Level </div>
                                <div> Entry level </div>
                            </div>
                            <div className={record}>
                                <div className={title}>Job Categories </div>
                                <div>
                                    <div>category 1</div>
                                    <div> category 2</div>
                                    <div> category 3</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <div className={description}>
                    <h2>About Me</h2>
                    I am an aspiring frontend developer
                </div>

                <section className={container}>
                    <section className={informationContainer}>
                        <h2 style={{ textAlign: 'center' }}> Working Experience </h2>
                        <Divider />
                        <div className={blockGroup}>
                            {
                                companiesWorked.map(company =>
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
                                            <div> {company.level}</div>
                                        </div>
                                        <div className={record}>
                                            <div className={title}> Time period </div>
                                            <div> {company.start_date} - {company.end_date}</div>
                                        </div>
                                        <div className={record}>
                                            <div className={title}> Salary </div>
                                            <div> Rs. {company.salary} </div>
                                        </div>
                                        <div className={record}>
                                            <div className={title}> Description </div>
                                            <div> {company.description} </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </section>
                </section>

                <Divider />
                <section className={container}>
                    <section className={informationContainer}>
                        <h2 style={{ textAlign: 'center' }}> Educational Qualifications </h2>
                        <Divider />
                        <div className={blockGroup}>
                            {
                                educations.map( education =>

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
                                            <div>{education.start_date} - {education.end_date}</div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
}

export default ViewProfile;