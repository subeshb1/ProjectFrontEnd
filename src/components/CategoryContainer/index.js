import React from 'react';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import useStyles from '../styles.js';
import { NavLink } from 'react-router-dom';

function Category( {title1, title2, jobs} ) {
    let { root, title, titleText, titleLine, card, wrapper, media } = useStyles();
    
    return (
        <div className={root}>

            <div className={title}>
                <span className={titleLine}> </span>
                {title1}   <span className={titleText} > {title2} </span>
                <span className={titleLine}> </span>
            </div>

            <div className={wrapper}>
                {jobs.map(job =>
                    //displaying jobs 
                    (
                        <NavLink to={job.link} isActive={() => false}>
                            <Card className={card} key={job.title}>
                                <CardMedia
                                    image={require(`./jobImages/${job.imageName}.jpg`)}
                                    title={`${job.title}`} className={media}
                                />
                                <CardContent>
                                    {job.title}
                                </CardContent>
                            </Card>
                        </NavLink>
                    )

                )}

            </div>
        </div>

    );

}

export default Category;