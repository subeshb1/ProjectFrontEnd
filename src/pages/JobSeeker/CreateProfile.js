import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, RadioGroup, Radio, FormControl, FormLabel, FormControlLabel, Button } from '@material-ui/core';

//datepicker
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";


const useStyles = makeStyles(theme => ({
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


export default function CreateProfile() {
    const { root, form, inputField, button } = useStyles();
    //jobseeker information
    const [values, setValues] = useState({
        name: '',
        website: '',
        //birth_date: new Date(),
        phone_numbers: {            //object
            home: '',
            personal: ''
        },
        social_accounts: {          //object
            facebook: ''
        },
        description: '',
        gender: '',
        avatar: null,
        address: {                  //object
            permanent: ''
        }
    });

    //state for date
    const [selectedDate, setSelectedDate] = useState({
        birth_date: new Date()
    });

    //Handlers

    //single property handlers
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
        console.log(values.gender)
    }
    //address
    const handleAddressChange = event => {
        setValues({
            ...values,
            address: {
                ...values.address,
                [event.target.name]: event.target.value
            }
        })
        console.log(values.address)
    }

    //date
    const handleDateChange = date => {
        setSelectedDate({ birth_date: date });
        //setValues({birth_date:date});
        console.log(selectedDate);
    }

    //phone_numbers
    const handlePhoneNumberChange = event => {

        setValues({
            ...values,           //create copy of state variable object named 'values'
            phone_numbers: {     //access phone_numbers property in 'values'
                ...values.phone_numbers,
                [event.target.name]: event.target.value
            }
        });
        console.log(values.phone_numbers);
    }

    //social_links
    const handleSocialAccountsChange = event => {
        setValues({
            ...values,
            social_accounts: {
                ...values.social_accounts,
                [event.target.name]: event.target.value
            }
        });
        console.log(values.social_accounts);
    }

    return (
        <div className={root}>

            <form className={form}>

                <h1 style={{ fontSize: 35 }}> BASIC INFORMATION </h1>
                <TextField
                    id="name"
                    label="Name"
                    className={inputField}
                    value={values.name}
                    onChange={handleChange('name')}
                    margin="normal"
                    required />

                <TextField
                    id="address"
                    label="Address"
                    className={inputField}
                    value={values.address.permanent}
                    onChange={handleAddressChange}
                    margin="normal"
                    name="permanent"
                    required />

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        value={selectedDate.birth_date}
                        onChange={handleDateChange}
                        label="Date of Birth"
                        className={inputField}
                        format="yyyy/MM/dd"
                        required />
                </MuiPickersUtilsProvider>

                <div>
                    <TextField
                        id="phone_numbers_personal"
                        label="Personal Number"
                        className={inputField}
                        value={values.phone_numbers.personal}
                        onChange={handlePhoneNumberChange}
                        margin="normal"
                        type="number"
                        name="personal"
                        required />

                    <TextField
                        id="phone_numbers_home"
                        label="Telephone Number"
                        className={inputField}
                        value={values.phone_numbers.home}
                        onChange={handlePhoneNumberChange}
                        margin="normal"
                        type="number"
                        name="home"
                    />
                </div>

                <TextField
                    id="website"
                    label="Website"
                    className={inputField}
                    value={values.website}
                    onChange={handleChange('website')}
                    margin="normal"
                />

                <div className={inputField}>
                    <p style={{ marginTop: '15px' }}>Social Accounts</p>
                    <TextField
                        id="social_accounts_facebook"
                        label="Facebook"
                        /* className={inputField} */
                        value={values.social_accounts.facebook}
                        onChange={handleSocialAccountsChange}
                        margin="normal"
                        name="facebook"
                    />
                </div>

                <TextField
                    id="description"
                    label="Description about yourself"
                    className={inputField}
                    value={values.description}
                    onChange={handleChange('description')}
                    margin="normal"
                    multiline
                    rows={2}
                    required />

                <div className={inputField}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            aria-label="Gender"
                            name="gender"
                            value={values.gender}
                            onChange={handleChange('gender')}
                        >
                            <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                            <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                            <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <Button variant="contained" color="primary" className={button}>
                    Submit
                </Button>
                
            </form>
        </div>
    );
}