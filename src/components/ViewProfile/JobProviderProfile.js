import React from 'react';
import { Avatar, Divider } from '@material-ui/core';
import useStyles from './styles.js';

const jobVacancies = [
    {
        job_title: "Frontend Developer", open_seats: "3", level: "entry level",
        min_salary: 6000, max_salary: 10000, job_type: "full time", categories: ["Computer and IT"]
    },
    {
        job_title: "Project Manager", open_seats: "1", level: "mid level",
        min_salary: 16000, max_salary: 25000, job_type: "full time",
        categories: ["Computer and IT", "Management"]
    },
    {
        job_title: "Project Manager", open_seats: "1", level: "mid level",
        min_salary: 16000, max_salary: 25000, job_type: "full time",
        categories: ["Computer and IT", "Management"]
    }
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
                    <Avatar alt="Female" src={require('../../assets/images/avatar/female.png')} className={avatar} />
                </section>
                <section style={{ textAlign: 'center' }}>
                    <h2>Organization Name</h2>
                </section>
                <Divider />
                <section className={container}>
                    <section className={informationContainer}>
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
                                <div> tashi2_test@gmail.com </div>
                            </div>
                            <div className={record}>
                                <div className={title}>Date of Establishment </div>
                                <div> established_date </div>
                            </div>
                            <div className={record}>
                                <div className={title}>Social Accounts </div>
                                <div>
                                    <div>facebook.com/organization</div>
                                    <div> twitter.com/organization </div>
                                </div>
                            </div>
                            <div className={record}>
                                <div className={title}>Website </div>
                                <div> website </div>
                            </div>

                        </div>
                    </section>

                </section>

                <div className={description}>
                    <h2>About Us</h2>
                    This is a multinational company.
                </div>

                <section className={container}>
                    <section className={informationContainer}>
                        <h2 style={{ textAlign: 'center' }}> Job Vacancy </h2>
                        <Divider />
                        <div className={blockGroup}>
                            {
                                jobVacancies.map((vacancy, i) =>

                                    <div className={eachBlock} key={vacancy.job_title + i}>
                                        <div className={record}>
                                            <div className={title}>
                                                <img
                                                    src={require('assets/images/avatar/male.png')}
                                                    alt="male.png"
                                                />
                                            </div>
                                            <div>
                                                <h3> {vacancy.job_title} </h3>
                                                <div> {vacancy.level} </div>
                                                <div> {vacancy.job_type} </div>
                                            </div>
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