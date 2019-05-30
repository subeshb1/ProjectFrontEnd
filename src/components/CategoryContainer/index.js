import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
    categoryWrapper: {
        background: 'whitesmoke',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '20px 0'
    },
    card: {
        margin: '20px 35px',
        textAlign: 'center',
        textTransform: 'capitalize',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    media: {
        width: 200,
        height: 100
    },
    title: {
        textAlign: 'center',
        fontSize: 25
    },
    titleLine: {
        border: '3px solid black',
        display: 'inline-block',
        width: '5vw',
        position: 'relative',
        bottom: 6,
        margin: '0 10px'
    }
});

//job names (jobImages)
const jobs = ["agriculture", "ayurved", "computer and IT", "education", "engineering", "health", "law", "management",
    "nursing", "pharmacist", "science"];


function Category() {
    let { card, categoryWrapper, media, title, titleLine } = useStyles();

    return (
        <div>

            <div className={title}>
                <span className={titleLine}> </span>
                JOB CATEGORIES
                <span className={titleLine}> </span>
            </div>

            <div className={categoryWrapper}>
                {jobs.map((job, i) =>
                    //displaying jobs 
                    (
                        <Card className={card}>
                            <CardMedia image={require(`./jobImages/${job}.jpg`)} title={`${job}`} className={media} />
                            <CardContent>
                                {job}
                            </CardContent>
                        </Card>
                    )

                )}


            </div>
        </div>

    );

}

export default Category;