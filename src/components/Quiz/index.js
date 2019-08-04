import React, { useState, useEffect } from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//style
import { makeStyles } from '@material-ui/styles';
import useStyles from 'components/styles';
//component
import Question from 'components/Quiz/Question';

const useStyles2 = makeStyles(theme => ({
    'root': {
        margin: " 20px auto",
        minWidth: 310,
        width: " 80vw",
    }
}));



export default function Quiz({ name, questions }) {

    const { title, titleLine, titleText } = useStyles();
    const { root } = useStyles2();

    let [marksCount, setMarksCount] = useState(0); //to count marks from correct ans

    const handleCount = () => {
        setMarksCount(marksCount + 1);
    }

    /* useEffect( () =>{
        console.log(marksCount);
    }) */

    return (

        <div className={root}>
            <div className={title}>
                <span className={titleLine}> </span>
                <span className={titleText} > {name} </span>
                <span className={titleLine}> </span>
            </div>
            {

                questions.map((qItem, i) => (
                    <ExpansionPanel key={`question` + i}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            {`${i + 1}. ${qItem.question}`}
                        </ExpansionPanelSummary>

                        <ExpansionPanelDetails>
                            <Question questionProps={qItem} handleCount={handleCount} />
                        </ExpansionPanelDetails>

                    </ExpansionPanel>
                ))
            }


            <div style={{ display: 'flex', justifyContent: 'center', margin: "20px auto" }}>
                <Button variant="contained" color="primary"
                    style={{ width: 100 }}
                    onClick={() => console.log("Marks: " + marksCount)}
                >
                    SUBMIT
                </Button>
            </div>

        </div >

    );
}