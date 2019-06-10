import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '10px auto',
        minWidth: '310px',
        width: '80vw',
        //border: '1px solid',
        background: 'whitesmoke',
    },
    form: {
        display: 'grid',
        padding: '2vw'
    },
    textField: {
        margin: '10px 20px',
        '& label.Mui-focused': {
            color: '#1da4f3',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#1da4f3',
        },
    },

}));


export default function CreateProfile() {
    const { root, form, textField } = useStyles();

    const [values, setValues] = useState({
        name: '',
        website: '',
        birthdate: '',
        phone_numbers: null,     //object
        social_accounts: null,    //object
        description: '',
        gender: '',
        avatar: null,
        address: null    //object
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
        console.log(values.name)
    }

    return (
        <div className={root}>
            <form className={form}>
                <TextField
                    id="standard-name"
                    label="Name"
                    className={textField}
                    value={values.name}
                    onChange={handleChange('name')}
                    margin="normal"
                />

                <TextField
                    id="standard-birthdate"
                    label=""
                    className={textField}
                    value={values.birthdate}
                    onChange={handleChange('birthdate')}
                    margin="normal"
                    type="date"
                />

                <TextField
                    id="standard-address"
                    label="Address"
                    className={textField}
                    value={values.address}
                    onChange={handleChange('address')}
                    margin="normal"
                />

                <TextField
                    id="standard-phone_numbers"
                    label="Phone Numbers"
                    className={textField}
                    value={values.phone_numbers}
                    onChange={handleChange('phone_numbers')}
                    margin="normal"
                    type="number"
                />
            </form>
        </div>
    );
}