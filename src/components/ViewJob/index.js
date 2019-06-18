import React from 'react';
import { Avatar, Divider, Button } from '@material-ui/core';
//styles
import useStyles from '../ViewProfile/styles.js';

const job =
    {
        job_title: "Frontend Developer", open_seats: "3", level: "entry level",
        min_salary: 6000, max_salary: 10000, job_type: "full time", deadline: "21 July, 2019",
        categories: ["Computer and IT", "Science and Technology"]
    };

function ViewJob() {
    const { wrapper, avatarContainer, avatar, description, container, informationContainer,
        blockGroup, eachBlock, record, title, button } = useStyles();
    return (
        <div>
            <div className={wrapper} style={{ paddingBottom: 10 }}>
                <section className={avatarContainer}>
                    <Avatar alt="Female" src={require('../../assets/images/avatar/female.png')} className={avatar} />
                </section>
                <section style={{ textAlign: 'center' }}>
                    <h2>Organization Name</h2>
                </section>
                <div className={description}>
                    <h2>About Us</h2>
                    <p>
                        This is a multinational company. <br />
                        This is a multinational company. <br />
                        This is a multinational company. <br />
                        This is a multinational company. <br />
                    </p>
                </div>
                <h2 style={{ textAlign: 'center', margin: '10px 0' }}> Job Description </h2>
                <Divider />
                <section className={container}>
                    <section className={informationContainer}>
                        <h2> Basic Information </h2>
                        <Divider />
                        <div className={blockGroup}>

                            <div className={eachBlock}>
                                <div className={record}>
                                    <div className={title}> Job Title </div>
                                    <div> {job.job_title} </div>
                                </div>
                                <div className={record}>
                                    <div className={title}> Seats available </div>
                                    <div>{job.open_seats}</div>
                                </div>
                                <div className={record}>
                                    <div className={title}> Job Level </div>
                                    <div>{job.level} </div>
                                </div>
                                <div className={record}>
                                    <div className={title}> Salary </div>
                                    <div>{job.min_salary} - {job.max_salary} </div>
                                </div>
                                <div className={record}>
                                    <div className={title}> Job Type </div>
                                    <div>{job.job_type} </div>
                                </div>

                                <div className={record}>
                                    <div className={title}> Job Category </div>
                                    <div>
                                        {job.categories.map(category =>
                                            <div key={category}> {category} </div>
                                        )}
                                    </div>
                                </div>

                                <div className={record} style={{ border:'1px solid #0000004d', borderRadius: 5 }} >
                                    <div className={title}> Deadline </div>
                                    <div>{job.deadline} </div>
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
                                    <div className={title}> Education Level </div>
                                    <div> Bachelors </div>
                                </div>
                                <div className={record}>
                                    <div className={title}> Experience Required </div>
                                    <div> 2 years </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                
                <section className={container}>
                    <section className={informationContainer}>
                        <h2> Basic Information </h2>
                        <Divider />
                        <div className={blockGroup}>

                            <div className={eachBlock}>
                                <div className={record}>
                                    <div className={title}> Job Title </div>
                                    <div> {job.job_title} </div>
                                </div>
                                <div className={record}>
                                    <div className={title}> Seats available </div>
                                    <div>{job.open_seats}</div>
                                </div>
                                <div className={record}>
                                    <div className={title}> Job Level </div>
                                    <div>{job.level} </div>
                                </div>
                                <div className={record}>
                                    <div className={title}> Salary </div>
                                    <div>{job.min_salary} - {job.max_salary} </div>
                                </div>
                                <div className={record}>
                                    <div className={title}> Job Type </div>
                                    <div>{job.job_type} </div>
                                </div>

                                <div className={record}>
                                    <div className={title}> Job Category </div>
                                    <div>
                                        {job.categories.map(category =>
                                            <div key={category}> {category} </div>
                                        )}
                                    </div>
                                </div>

                                <div className={record} style={{ border:'1px solid #0000004d', borderRadius: 5 }} >
                                    <div className={title}> Deadline </div>
                                    <div>{job.deadline} </div>
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
                                    <div className={title}> Education Level </div>
                                    <div> Bachelors </div>
                                </div>
                                <div className={record}>
                                    <div className={title}> Experience Required </div>
                                    <div> 2 years </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                             
                <Button variant="contained" color="primary" className={button}>
                    Apply Now
                </Button>
            </div>
        </div>
    );
}

export default ViewJob;