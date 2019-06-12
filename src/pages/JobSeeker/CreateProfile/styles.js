import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
    root: {
        margin: '10px auto',
        minWidth: '300px',
        width: '65vw',
        background: 'whitesmoke',
    },
    form: {
        display: 'grid',
        padding: '2vw'
    },
    inputField: {
        margin: '10px 20px',
        '& label.Mui-focused': {
            color: '#1da4f3',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#1da4f3',
        },
    },

    button: {
        width: 110,
        margin: '0 auto'
    }

}));