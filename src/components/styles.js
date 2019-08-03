import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        margin: 0
    },
    //title styling
    title: { 
        textAlign: 'center', 
        padding:'30px 0',
        fontSize: 35,
        [theme.breakpoints.down(500)]:{
            fontSize:20
        }
    },
    titleText: { color: '#37677A', fontWeight: 'bolder' },

    titleLine: {
        border: '3px solid black',
        display: 'inline-block',
        width: '5vw',
        position: 'relative',
        bottom: 9,
        margin: '0 10px',
        [theme.breakpoints.down(500)]:{
            bottom:4
        }
    },

    wrapper: {
        background: 'whitesmoke',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '20px 0'
    },
    paper: {
        margin: '15px 30px',
        cursor: 'pointer',
        minWidth: 204,
        padding: 5
    },
    companyTitle: {
        //to hide long sentences
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    logo: {
        height: 60,
        width: 60
    },
    list: {
        listStyleType: 'square',
        paddingLeft: 15,
        fontSize: 12,
        //to hide long sentences
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },

    card: {
        margin: '20px 35px',
        textAlign: 'center',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    media: { width: 200, height: 100 }

}));

export default useStyles;