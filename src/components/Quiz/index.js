import React, { useState, useEffect, createRef } from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';
//style
import { makeStyles } from '@material-ui/styles';
import useStyles from 'components/styles';
//component
import Question from 'components/Quiz/Question';
import Result from 'components/Quiz/Result';

const useStyles2 = makeStyles(theme => ({
    'root': {
        margin: " 20px auto",
        minWidth: 310,
        width: " 80vw",
    },
    'submitBtnContainer': {
        display: 'flex',
        justifyContent: 'center',
        margin: "50px auto"
    },
    'result': {
        padding: " 50px 0",
        display: 'flex',
        justifyContent: 'center'
    }
}));


export default function Quiz({ name, questions, id }) {

    const { title, titleLine, titleText } = useStyles();
    const { root, submitBtnContainer, result } = useStyles2();

    
    let userAnsArr= []; 
    const resultRef = createRef();
    const [answers,setAnswers] = useState([]);
    const pushCheckedAns = (questionNumber, userAns) => {
        let questionIndex = questionNumber - 1;  //since Q no. starts with 1 but arr index starts with 0
        userAnsArr[questionIndex] = userAns;
        setAnswers(answers => {
            answers[questionIndex] = userAns;
            return [...answers]
        })
    }
    

    const handleSubmit = () => {
        axios.post(`/api/v1/exams/${id}/result`,{answers: answers}).
        then(x => alert("Success"))
    }


    return (
        <div style={{ background: 'whitesmoke' }}>
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
                                <Question questionProps={qItem} questionNumber={i + 1} pushCheckedAns={pushCheckedAns} />
                            </ExpansionPanelDetails>

                        </ExpansionPanel>
                    ))
                }


                <div className={submitBtnContainer}>
                    <Button variant="contained" color="primary"
                    onClick={handleSubmit}
                    >
                        SUBMIT ANSWERS
                </Button>
                </div>
            </div >
            <div ref={resultRef} className={result} >
                <Result />
            </div>
        </div>
    );
}