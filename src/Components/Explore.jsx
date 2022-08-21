import React from 'react';
import { useHistory } from 'react-router-dom';
import './Explore.css';
import { render } from '@testing-library/react';

const Explore = (prop) => {
    const history=useHistory();
    const takeToQuiz=(event)=>{
        prop.updateQuizCategory(event.target.name);
        history.push(`/${event.target.name}`);
    }
    return (
        <div className="explore">
            <div className="temp">
                
            </div> 
            <div className="heading-explore">
                <h1>Choose Quiz !</h1>
            </div>
            <div className="main">
                <div className="category">
                    <p style={{fontSize:'3vh'}}>Choose Category </p>
                    <div className="links">   
                        <button name='Linux' className="category-link" onClick={takeToQuiz}>Linux</button>
                        <button name='DevOps' className="category-link" onClick={takeToQuiz}>DevOps</button>
                        <button name='MySQL' className="category-link" onClick={takeToQuiz}>My SQL</button>
                        <button name='Docker' className="category-link" onClick={takeToQuiz}>Docker</button>
                        <button name='BASH' className="category-link" onClick={takeToQuiz}>Bash</button>
                        <button name='Laravel' className="category-link" onClick={takeToQuiz}>Laravel</button>
                        <button name='Kubernetes' className="category-link" onClick={takeToQuiz}>Kubernetes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore
