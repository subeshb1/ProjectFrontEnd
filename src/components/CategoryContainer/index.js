import React from 'react';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import useStyles from '../styles.js';

const jobs = [
    { title: "Agriculture", imageName: "agriculture" },
    { title: "Ayurved", imageName: "ayurved" },
    { title: "Computer and IT", imageName: "computer and IT" },
    { title: "Educaiton", imageName: "education" },
    { title: "Engineering", imageName: "engineering" },
    { title: "Health", imageName: "health" },
    { title: "Law", imageName: "law" },
    { title: "Management", imageName: "management" },
    { title: "Nursing", imageName: "nursing" },
    { title: "Pharmacist", imageName: "pharmacist" },
    { title: "Science", imageName: "science" }
];


function Category() {
    let { root, title, titleText, titleLine, card, wrapper, media } = useStyles();

    return (
        <div className={root}>

            <div className={title}>
                <span className={titleLine}> </span>
                JOB  <span className={titleText} >CATEGORIES</span>
                <span className={titleLine}> </span>
            </div>

            <div className={wrapper}>
                {jobs.map( job =>
                    //displaying jobs 
                    (
                        <Card className={card} key={job.title}>
                            <CardMedia
                                image={require(`./jobImages/${job.imageName}.jpg`)}
                                title={`${job.imageName}`} className={media}
                            />
                            <CardContent>
                                {job.title}
                            </CardContent>
                        </Card>
                    )

                )}

            </div>
        </div>

    );

}

export default Category;