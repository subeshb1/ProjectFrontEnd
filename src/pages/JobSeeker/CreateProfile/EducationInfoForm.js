import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
//date
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
//select
import Select from 'react-select';
//styles
import { useStyles } from './styles.js';

//just a component. **NOTE: not a form**
export default function EducationInfoForm() {
    const { root, form, inputField, } = useStyles();

    const [education, setEducation] = useState({
        program: '',
        degree: '',
        categories: []
    });

    const [selectedDate, setSelectedDate] = useState({
        start_date: new Date(),
        end_date: new Date()
    });

    // const degrees = ["Master", "Bachelor", "Intermediate", "SLC/SEE", "Other", "Ph. D."];
    const degrees = [
        { value: "Master", label: "Master" },
        { value: "Bachelor", label: "Bachelor" },
        { value: "Intermediate", label: "Intermediate" },
        { value: "SLC/SEE", label: "SLC/SEE" },
        { value: "Other", label: "Other" },
        { value: "Ph. D.", label: "Ph. D." }
    ]
    /* const categories = [
        "Agriculture", "Ayurved", "Computer and IT", "Education", "Engineering",
        "Law, public safety and security", "Management", "Medicine and Health care",
        "Nursing", "Pharmacy", "Science and Technology"]; */

    const categories = [
        { value: "Agriculture", label: "Agriculture" },
        { value: "Ayurved", label: "Ayurved" },
        { value: "Computer and IT", label: "Computer and IT" },
        { value: "Education", label: "Education" },
        { value: "Engineering", label: "Engineering" },
        { value: "Law, public safety and security", label: "Law, public safety and security" },
        { value: "Management", label: "Management" },
        { value: "Medicine and Health Care", label: "Medicine and Health Care" },
        { value: "Nursing", label: "Nursing" },
        { value: "Pharmacy", label: "Pharmacy" },
        { value: "Science and Technology", label: "Science and Technology" },
    ]

    //Handlers
    const handleChange = name => event => {
        setEducation({
            ...education,
            [name]: event.target.value
        });
        console.log(education[name])
    }

    const handleDateChange = name => date => {
        setSelectedDate({
            ...selectedDate,
            [name]: date
        });
        console.log(selectedDate[name]);
    }

    const handleSelectChange = name => selectedValue => {
        setEducation({
            ...education,
            [name]: selectedValue
        });
        console.log(education[name]);
    }

    return (
        <div className={root}>
            <div className={form}>

                <TextField
                    label="Program"
                    className={inputField}
                    value={education.program}
                    onChange={handleChange('program')}
                    margin="normal"
                    required
                />

                <Select
                    value={education.degree}
                    onChange={handleSelectChange('degree')}
                    options={degrees}
                    className={inputField}
                    placeholder="Select degree"
                />

                <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            value={selectedDate.start_date}
                            onChange={handleDateChange('start_date')}
                            label="Start Date"
                            className={inputField}
                            format="yyyy/MM/dd"
                        />

                        <KeyboardDatePicker
                            value={selectedDate.end_date}
                            onChange={handleDateChange('end_date')}
                            label="End Date"
                            className={inputField}
                            format="yyyy/MM/dd"
                        />
                    </MuiPickersUtilsProvider>
                </div>

                <Select
                    value={education.categories}
                    onChange={handleSelectChange('categories')}
                    isMulti
                    options={categories}
                    className={inputField}
                    placeholder="Select Category"
                />

            </div>
        </div>
    )
}

