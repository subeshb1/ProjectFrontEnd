import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, FormControl, InputLabel, OutlinedInput, Select, MenuItem, Button } from '@material-ui/core';
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
        boxShadow: "0 0 2px grey",
        display: "grid",
        justifyContent: "center",
        minWidth: 310,
        width: '25vw',
        padding: "20px 0",
        marginBottom: 60,
    },
    userIcon: {
        textAlign: 'center',
        '& i': {
            height: 60,
            width: 60,
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

    //create state variables
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        confirmPassword: '',
        accountType: ''
    });

    //let profileLink = (values.accountType === "Job Seeker") ? "/create-job-seeker-profile" : "/create-job-provider-profile";

    function handleChange(event) {
        setValues({
            ...values, [event.target.name]: event.target.value
        })
    }

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
                    value={values.email}
                    onChange={handleChange}
                />

                <TextField
                    id="password"
                    className={textField}
                    label="Password"
                    type="password"
                    name="password"
                    margin="normal"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}

                />

                <TextField
                    id="confirm-password"
                    className={textField}
                    label="Re-enter Password"
                    type="password"
                    name="confirmPassword"
                    margin="normal"
                    variant="outlined"
                    value={values.confirmPassword}
                    onChange={handleChange}

                />

                <FormControl variant="outlined" style={{ margin: '15px 0' }} >
                    <InputLabel htmlFor="outlined-account-type">
                        Account Type
                    </InputLabel>
                    <Select
                        value={values.accountType}
                        onChange={handleChange}
                        input={<OutlinedInput labelWidth={98} name="accountType" id="outlined-account-type" />}
                    >

                        <MenuItem value="Job Seeker">Job Seeker</MenuItem>
                        <MenuItem value="job Provider">Job Provider</MenuItem>
                    </Select>
                </FormControl>

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