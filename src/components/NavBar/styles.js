import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  grow: {
    display: 'flex',
  },
  appbar: {
    background: '#37677A'
  },
  toolbar: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  link: {
    fontFamily: "'Roboto Condensed', sans-serif ",
    fontSize: '1.3rem',
    padding: '0 8px',
    borderRight: '2px solid #ffffff4d',
    color: 'white',
    '&:hover': {
      textDecoration: 'underline',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  iconContainer: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
      position: 'absolute',
      top: '1.5vw',
      right: '2vw'
    }
  },
  iconButton: {
    color: 'white'
  },

}));