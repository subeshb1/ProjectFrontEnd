import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  grow: {
    display: 'flex',
  },
  appbar: {
    background: '#004865'
  },
  toolbar: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    }
  },
  link: {
    fontSize: '1.3rem',
    padding: '0 1.5rem',
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
      margin: '0 0 0 auto'
    }
  },
  iconButton: {
    color: 'white'
  },

}));