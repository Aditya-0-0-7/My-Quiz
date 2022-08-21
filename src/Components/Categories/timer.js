import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './Timer.css';
function Timer()
{
    const navigate=useHistory();
    const [timer,setTimer]=useState(3);
    const [color,setColor]=useState('green');

    const makeRandColor = () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`;
    }

    const switchToQuiz=()=>{
        navigate.push('/playQuiz');
    }

    React.useEffect(()=>{
        function helpSetTimer(count)
        {
            if(count===0)
            {
                switchToQuiz();
                return;
            }
            setTimeout(()=>{
                setTimer(value => value-1);
                setColor(makeRandColor());
                helpSetTimer(count-1)
            },'1000')
        }
        helpSetTimer(3);
    },[]);

    return(
        <div style={{backgroundColor:color}} className="timerContainer">
            <div className='timer'>{timer}</div>
        </div>
    )
}
export default Timer;