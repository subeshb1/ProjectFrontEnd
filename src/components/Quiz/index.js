import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Divider,
    List, ListItem, ListItemText,
    FormControl, RadioGroup, FormControlLabel, Radio
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles( theme => ({
    'heading':{
        margin:" 0 auto",
        minWidth:310,
        maxWidth:" 35vw",
        textAlign:"center",
        border:" 1px solid #00000045"
    },
    'expansionPanelSummary':{
        
    }
}));

export default function Quiz() {
    const { heading, expansionPanelSummary } = useStyles();

    let [ans, setAns] = useState(null);

    let handleChange = event => {
        setAns(event.target.value);
    }

    return (
        <div>
            <h3 className={heading}> Title Test</h3>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={expansionPanelSummary}
                >
                    Question 1
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                    <FormControl component="fieldset" /* className={classes.formControl} */>
                        <RadioGroup
                            /* className={classes.group} */
                            value={ans}
                            onChange={handleChange}
                        >
                            <List>
                                <ListItem>
                                    <ListItemText primary="option1" />
                                    <FormControlLabel
                                        value={0}
                                        control={<Radio/>}
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemText primary="option2" />
                                    <FormControlLabel
                                        value={1}
                                        control={<Radio/>}
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemText primary="option3" />
                                    <FormControlLabel
                                        value={2}
                                        control={<Radio/>}
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemText primary="option4" />
                                    <FormControlLabel
                                        value={3}
                                        control={<Radio/>}
                                    />
                                </ListItem>
                            </List>

                        </RadioGroup>

                    </FormControl>
                </ExpansionPanelDetails>
            </ExpansionPanel>

        </div>
    );
}