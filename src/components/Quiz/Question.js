import React, { useState, useEffect, createRef } from 'react';
import {
    List, ListItem, ListItemText,
    FormControl, RadioGroup, FormControlLabel, Radio
} from '@material-ui/core';


export default function Question(props) {

    let { options, answer } = props.questionProps;
    let { handleCount } = props;

    const [userAns, setUserAns] = useState("");

    const ref = createRef();    //for tracking element of Material UI i.e. DOM manipulation

    const handleChange = event => {
        
        setUserAns(event.target.value);

        const formControlElement = ref.current;
        formControlElement.disabled = true;
        //console.log(formControlElement);
        if (event.target.value === answer.toString()) {      
            return handleCount();
        }
    }

    //to show value of userAns in real time; shows value of userAns before & after being updated
    /* useEffect(() => {
        console.log(userAns);
    }); */

    return (

        <>
        <FormControl component="fieldset" ref={ref}>
            <RadioGroup
                value={userAns}
                onChange={handleChange}
            >
                <List>
                    {
                        options.map((option, i) => {

                            let val = (i + 1).toString(); //since radio button value only takes string
                            return (
                                <ListItem key={`option` + i} >
                                    <ListItemText primary={option} />
                                    <FormControlLabel
                                        value={val}
                                        control={<Radio />}
                                        
                                    />
                                </ListItem>
                            )
                        })
                    }
                </List>

            </RadioGroup>

        </FormControl>
        </>
    );
}