import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    wrapper: {
        margin: '100px auto',
        width: '80vw',
        minWidth: 290,
        boxShadow: '0 0px 4px 0 rgba(0, 0, 0, 0.32)',
        [theme.breakpoints.down(600)]:{
            width:'95vw'
        }
    },
    avatarContainer: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        height: 50
    },
    avatar: {
        width: 100,
        height: 100,
        margin: '0 auto',
        position: 'absolute',
        top: -55,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin: '10px 0'
    },
    informationContainer: {
        padding: 5
    },
    record: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: 5,
        /* border: '1px solid' */
    },
    title: {
        minWidth: 205,
        width: '15vw',
        fontWeight: 'bold'
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'justify',
        padding: 10,
        border: '2px solid #0000001a',
    },
    blockGroup: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    eachBlock: {
        margin: '25px 45px',
        borderLeft: '5px solid #0000001a',
        paddingLeft: 10,
        [theme.breakpoints.down(600)]:{
            margin:'25px 20px'
        }
    }
}))
export default useStyles;