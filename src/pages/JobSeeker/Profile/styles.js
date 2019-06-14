import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
    root: {
        margin: '10px auto',
        maxWidth: '900px',
        width: '100%',
        boxShadow: "0 0 2px grey",
        borderRadius: 8,
        "& h1": {
            marginLeft: 23
        }
    },
    form: {
        display: 'grid',
        padding: '2vw'
    },
    inputField: {
        margin: '10px 20px',
        
    },

    button: {
        width: 110,
        margin: '0 auto'
    },
    container:{
        margin: '10px auto',
        maxWidth: '900px',
        width: '100%',
    }

}));