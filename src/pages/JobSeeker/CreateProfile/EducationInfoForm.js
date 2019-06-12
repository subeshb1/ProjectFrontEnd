import React, { useState } from 'react';
import { TextField, FormControl, Select, InputLabel, Input, MenuItem } from '@material-ui/core';
//date
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
//styles
import { useStyles } from './styles.js';

//just a component. **NOTE: not a form**
export default function EducationInfoForm() {
    const { root, form, inputField, } = useStyles();

    const [education, setEducation] = useState({
        program: '',
        degree: '',
        categories: [""]
    });

    const [selectedDate, setSelectedDate] = useState({
        start_date: new Date(),
        end_date: new Date()
    });

    const degrees = ["Master", "Bachelor", "Intermediate", "SLC/SEE", "Other", "Ph. D."];
    const categories = [
        "Agriculture", "Ayurved", "Computer and IT", "Education", "Engineering",
        "Law, public safety and security", "Management", "Medicine and Health care",
        "Nursing", "Pharmacy", "Science and Technology"];

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
        console.log(selectedDate.start_date);
    }

    const handleCategoriesChange = name => event => {
        setEducation({
            ...education,
            [name]: event.target.value
        })
        console.log(education.categories);
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

                <FormControl className={inputField}>
                    <InputLabel htmlFor="degree">Select Degree</InputLabel>
                    <Select
                        value={education.degree}
                        onChange={handleChange('degree')}
                        input={<Input name="degree" id="degree" />}
                    >
                        {
                            degrees.map((degree, i) =>
                                (<MenuItem
                                    value={degree}
                                    key={degree}
                                >
                                    {degree}
                                </MenuItem>)
                            )
                        }
                    </Select>
                </FormControl>

                <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            value={selectedDate.start_date}
                            onChange={handleDateChange('start_date')}
                            label="Start Date"
                            className={inputField}
                            format="yyyy/MM/dd"
                            required
                        />

                        <KeyboardDatePicker
                            value={selectedDate.end_date}
                            onChange={handleDateChange('end_date')}
                            label="End Date"
                            className={inputField}
                            format="yyyy/MM/dd"
                            required
                        />
                    </MuiPickersUtilsProvider>
                </div>

                <FormControl className={inputField}>
                    <InputLabel htmlFor="categories">Select Category</InputLabel>
                    <Select
                        value={education.categories}
                        onChange={handleCategoriesChange('categories')}
                        multiple
                        input={<Input name="categories" id="categories" />}
                        required
                    >
                        {
                            categories.map(category =>
                                (<MenuItem
                                    value={category}
                                    key={category}
                                >
                                    {category}
                                </MenuItem>)
                            )
                        }
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

