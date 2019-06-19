import React from 'react';
import { InputBase, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import useStyles from 'components/styles.js';
//component
import JobPosted from 'components/JobPosted';
const searchBoxStyles = makeStyles(theme => ({
    form: {
        margin: '50px auto'
    },
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#004865e3',
        height: 62,
        width: 630,
        margin: '0 auto',
        minWidth: 285,
        [theme.breakpoints.down(700)]: {
            minWidth: 290,
            width: '85vw'
        }
    },
    inputRoot: {
        width: 542,
        minWidth: 200,
        marginRight: -5,
        [theme.breakpoints.down(700)]: {
            minWidth: 205,
            width: '65vw'
        }
    },
    inputInput: {
        height: 34,
        background: 'white',
        padding: '0px 15px 0px 10px;',
        borderRadius: 5
    },
    searchType: {
        width: 630,
        margin: '15px auto',
        display: 'flex',
        justifyContent: 'space-around',
        '& span': {
            cursor: 'pointer',
            '&:hover': {
                textDecoration: 'underline'
            }
        },
        [theme.breakpoints.down(700)]: {
            minWidth: 290,
            width: '85vw'
        }
    }
}));



export default function SearchBox() {
    const { form, searchBox, searchType, inputRoot, inputInput } = searchBoxStyles();
    const { title, titleLine, titleText } = useStyles();

    //dummy fetched data
    const companies = [
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
    ]
    
    const [search, setSearch] = React.useState({
        word: '',
        type: 'default'
    })

    const handleChange = name => event => {
        setSearch({ [name]: event.target.value });
    }

    return (
        <React.Fragment>
            <form className={form}>

                <div className={title}>
                    <span className={titleLine}> </span>
                    START <span className={titleText}> SEARCHING  JOBS? </span>
                    <span className={titleLine}> </span>
                </div>

                <div className={searchBox}>
                    <InputBase
                        placeholder="Search jobs..."
                        classes={{
                            root: inputRoot,
                            input: inputInput,
                        }}
                        inputProps={{ 'aria-label': 'Search' }}
                        value={search.word}
                        onChange={handleChange('word')}
                    />

                    <Button variant="contained" color="primary"  >
                        <SearchIcon />
                    </Button>
                </div>

                <div className={searchType}>
                    <span> By Job Title </span>
                </div>
            </form>

            {/* Fetched Job Post */}
            <section>
                <JobPosted postType="SEARCH RESULT:" companies={companies} />
            </section>
        </React.Fragment>
    );
}