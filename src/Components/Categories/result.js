import React from "react";
import Button from '@mui/material/Button';
import './result.css';
import { useHistory } from 'react-router-dom';
function Result(prop)
{
    const h=useHistory();
    const backToMenu=()=>{
        h.push('/Quiz/Category');
    }
    return(
        <div className="resultContainer">
            <div className="result">
                <div className="innerContainer">
                    <div className="imgScore"></div>
                    <div className="scoreCard">
                        <div className="general">Score: <div className="score">{prop.scorePayload.score}/10</div></div>
                        <div className="general">Attempted: {prop.scorePayload.attempted}</div>
                        <div className="general">Kept For Review: {prop.scorePayload.review}</div>
                        <div className="general">Skipped: {prop.scorePayload.skip}</div>
                    </div>
                </div>
                <div className="backButton"><Button variant="contained" onClick={backToMenu}>Exit Quiz</Button></div>
            </div>
        </div>
    )
}
export default Result;