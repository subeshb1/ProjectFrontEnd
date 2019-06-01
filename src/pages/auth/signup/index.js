import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    formContainer: {
        display: 'grid',
        justifyContent: 'center',
        maxWidth: "100%",
    },
    formHeader: {
        fontFamily: "'Roboto Condensed', sans-serif ",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        background: "#37677aa1",
        borderRight: "12px solid #37677A",
        borderLeft: "12px solid #37677A",
        marginTop: 60,      //match this margin with form's marginBottom
        padding: 12,
        textAlign: 'center',
        '& span': {
            color: 'white'
        }
    },
    form: {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        boxShadow:"0 0 2px grey",
        display: "grid",
        justifyContent: "center",
        minWidth: 360,
        padding: "20px 0",
        marginBottom: 60,
    },
    userIcon: {
        textAlign: 'center',
        '& i': {
            fontSize: 35,
            border: "2px solid black",
            borderRadius: "50%",
            padding: 10
        }
    },
    textField: {
        display: 'block',
        '& input': {
            minWidth: 245
        }
    },
    button: {
        margin: "5px 0",
        background: '#212121',
        color: 'white',
        '&:hover': {
            background: 'black'
        }
    }
})
function SignUp() {

    const { formContainer, formHeader, form, userIcon, textField, button } = useStyles();
    return (
        <div className={formContainer}>

            <h1 className={formHeader}>SIGN <span>UP</span></h1>

            <form className={form} >
                <div className={userIcon}>
                    <i class="fas fa-user-tie"></i>
                </div>


                <TextField
                    id="email"
                    className={textField}
                    label="Email" /* placeholder */
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    id="password"
                    className={textField}
                    label="Password"
                    type="password"
                    name="password"
                    autoComplete="password"
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    id="confirm-password"
                    className={textField}
                    label="Re-enter Password"
                    type="password"
                    name="confirm-password"
                    autoComplete="confirm-password"
                    margin="normal"
                    variant="outlined"
                />

                <div style={{ textAlign: "right" }}>
                    <Link to="/create-profile">
                        <Button className={button}>
                            Create an Account
                        </Button>
                    </Link>
                </div>

                <Link to="/login" style={{ textAlign: 'right', textDecoration: 'underline' }}>
                    Already have an Account? Login!
                </Link>
            </form>
        </div>
    );
}

export default SignUp