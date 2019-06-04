import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        background: '#37677A',
        color: 'white'
    },
    footerContainer: {
        padding: 30,
        '& h2':{
            margin:10
        }
    },
    subfooterContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    subfooterContent: {
        margin:20,
        '& h3': {
            fontFamily: "'Roboto Condensed', sans-serif ",
            lineHeight: 2
        }
    },

    subfooterContentItem: {
        display: 'block',
        margin: '5px 0',
        color: 'white',
        fontFamily: "'Roboto Condensed', sans-serif ",
        fontSize: 15,
        '&:hover': {
            textDecoration: 'underline'
        }
    },

    socialLink: {
        textDecoration: 'none',
        color: 'white',
        '& i': {
            background: '#000000ad',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            margin: '0 5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
                background: 'black'
            }
        },
    },
    copyRightText: {
        display: 'flex',
        justifyContent: 'center',
        margin: "20px 0",
        '& span': {
            borderTop: "1px solid #ffffff75",
            borderBottom: "1px solid #ffffff75",
            textAlign: 'center',
            width: '55vw'
        }
    }

});

//for external links
const socialMediaTitles = ['facebook', 'twitter', 'instagram', 'youtube', 'linkedin'];

export default () => {
    const { root, footerContainer, subfooterContainer, subfooterContent, subfooterContentItem,
        copyRightText, socialLink } = useStyles();

    return (
        <footer className={root}>
            <div className={footerContainer}>
                <h2>
                    <NavLink to="/" style={{color:'white'}}>Hamro Job</NavLink>
                </h2>
                <section className={subfooterContainer}>

                    <div className={subfooterContent}>
                        <h3>Company</h3>
                        <NavLink className={subfooterContentItem} to="/company/about"> About </NavLink>
                        <NavLink className={subfooterContentItem} to="/company/career"> Career </NavLink>
                        <NavLink className={subfooterContentItem} to="/company/report-abuse"> Report Abuse </NavLink>
                    </div>

                    <div className={subfooterContent}>
                        <h3> Get a job </h3>
                        <NavLink className={subfooterContentItem} to="/get-a-job/find-jobs"> Find Jobs </NavLink>
                    </div>

                    <div className={subfooterContent}>
                        <h3> Hire Workers </h3>
                        <NavLink className={subfooterContentItem} to="hire-workers/post-jobs"> Post Jobs </NavLink>
                    </div>

                    <div className={subfooterContent}>
                        <h3>Follow us: </h3>
                        <div style={{ display: 'flex' }}>
                            {
                                socialMediaTitles.map((title, i) => (
                                    <a href={`https://www.${title}.com`} className={socialLink} key={i}>
                                        <i className={`fab fa-${title}`}> </i>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </section>

                <section className={copyRightText}>
                    <span>All rights Reserved, &copy; 2019 </span>
                </section>
            </div>
        </footer>
    )
}