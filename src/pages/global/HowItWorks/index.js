import React from 'react';
import { withStyles } from '@material-ui/core/styles';

//importing images
import bannerImage from 'assets/images/HowItWorks/office_banner.jpg';
import jobSeeker from 'assets/images/HowItWorks/jobseeker.jpg';
import jobProvider from 'assets/images/HowItWorks/jobprovider.jpg';


const styles = theme => ({

    bannerContainer: {
        display: 'grid',
        position: 'relative',
        width: '100%',
        '& img': {
            width: 'inherit',
        },
        '& h1': {
            position: 'absolute',
            top: '1.5vw',
            left: '10vw',
            fontSize: '5vw',
            color: '#26383b',
            width: '15vw',
            paddingLeft: '2vw',
            borderLeft: '1vw solid #eb5a6b'
        }
    },

    detailContainer: {
        margin: '10px 0',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        '& img': {
            [theme.breakpoints.down(1000)]:{         //similar to mediaquery (maxwidth:1000px)
                order:0,
                height:'42vw'
            }
        }
    },

    workingDetails:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        padding:'0px 30px',
        lineHeight:3,
        '& h1':{
            fontSize:35
        },
        '& ul':{
            '& li':{
                '& i:before':{
                    marginRight:15
                }
            }
        },
        
        [theme.breakpoints.down(1000)]:{
            order:1
        },
        [theme.breakpoints.down(630)]:{
            //order:1,
            padding:'30px 20px',
            lineHeight:2,
            '& h1':{
                fontSize:24
            }
        },
    }
});

function HowItWorks(props) {
    const { classes } = props;
    const { bannerContainer, detailContainer, workingDetails } = classes;

    return (
        <div>
            <section className={bannerContainer} >
                <img src={bannerImage} alt="office_banner" />
                <h1>
                    How <br /> It <br /> Works
                </h1>
            </section>

            <section className={detailContainer} style={{background:"#18b5c6", color:'white'}}>

                <img src={jobSeeker} alt="Job seeker" />

                <div className={workingDetails} >
                    <h1>For Job Seekers</h1>
                    
                    <ul className="fa-ul">
                        <li><i class="fa-li fa fa-check-square"></i> Register an account as a Job Seeker.</li>
                        <li><i class="fa-li fa fa-check-square"></i> Login with the account.  </li>
                        <li><i class="fa-li fa fa-check-square"></i> Start searching for jobs. </li>
                    </ul>
                    
                </div>
            </section>

            <section className={detailContainer} style={{background:"#8dd9e0"}}>

                <div className={workingDetails}>
                    <h1>For Job Providers</h1>
                    
                    <ul className="fa-ul">
                        <li><i class="fa-li fa fa-check-square"></i> Register an account as a Job Provider. </li>
                        <li><i class="fa-li fa fa-check-square"></i> Login with the account. </li>
                        <li><i class="fa-li fa fa-check-square"></i> Start posting jobs to recruit job seekers. </li>
                    </ul>
                    
                </div>

                <img src={jobProvider} alt="Job Provider" />
            </section>

        </div>
    );
} 

export default withStyles(styles)(HowItWorks);