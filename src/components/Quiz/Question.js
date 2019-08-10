import React, { useState, createRef } from 'react';
import {
    List, ListItem, ListItemText,
    FormControl, RadioGroup, FormControlLabel, Radio
} from '@material-ui/core';


export default function Question(props) {

    let { options } = props.questionProps;
    let { pushCheckedAns } = props;
    let { questionNumber } = props;

    const [userAns, setUserAns] = useState("");

    const ref = createRef();    //for tracking element of Material UI i.e. DOM manipulation

    const handleChange = event => {

        setUserAns(event.target.value);

        const formControlElement = ref.current;
        return pushCheckedAns(questionNumber, event.target.value)
    }

    return (

        <>
        <FormControl component="fieldset" ref={ref}>
            <RadioGroup
                value={userAns}
                onChange={handleChange}
            >
                <List>
                    {
                        options.filter(x=>x).map((option, i) => {

                            return (
                                <ListItem key={`option` + i} >
                                    <ListItemText primary={option} />
                                    <FormControlLabel
                                        value={option}
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