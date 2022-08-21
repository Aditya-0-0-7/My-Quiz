import React, { useState } from "react";
import Loading from '../loading';
import Button from '@mui/material/Button';
import MenuOption from "../MenuOption";
import './quiz.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

function Quiz(prop)
{
    const [questionList,setQuestionList]=useState([]);
    const [questionIndex,updateIndex]=useState(0);
    const [score,updateScore]=useState(0);
    const [attempted,updateAttempted]=useState({});
    const [selectedOption,setSelectedOption]=useState({});
    const [anchorEl, setAnchorEl] = useState(null);
    const [tempSelectedOption,setTempSelectedOption]=useState(null);
    const [menuOption,updateMenuOption]=useState({1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0});
    const { enqueueSnackbar } = useSnackbar();
    const histories=useHistory();
    console.log(score);

    React.useEffect(()=>{
        setTempSelectedOption(null);
    },[questionIndex]);

    let option=React.useMemo(()=>{
        if(questionList.length!==0)
        {
            let tempOption={};
            Object.keys(questionList[questionIndex].answers).forEach((key)=>{
                if(questionList[questionIndex].answers[`${key}`]!==null)
                {
                    tempOption[`${key}`]=questionList[questionIndex].answers[`${key}`];
                }
            });
            return(tempOption);
        }
    },[questionIndex,questionList]);

    const selectOptionHandler=(event)=>{
        if(tempSelectedOption===null && `${questionIndex}` in attempted)
        {
            setTempSelectedOption(selectedOption[`${questionIndex}`]);
        }
        updateMenuOption(value=>{
            value[`${questionIndex+1}`]=1;
            return({...value});
        });
        setSelectedOption(value=>{
            value[`${questionIndex}`]=event.target.name;
            return({...value})
        });
    }

    const updateQuestionIndex=()=>{
        if(questionIndex===9)
        {
            updateIndex(0);
        }
        else
        {
            updateIndex(value=>value+1);
        }
    }

    const submitHandler=()=>{
        console.log(questionList[questionIndex]['correct_answers'])
        if(!(`${questionIndex}` in selectedOption))
        {
            enqueueSnackbar('please select some option', {
                variant: 'error',
                anchorOrigin: {
                    horizontal: 'right',
                    vertical: 'bottom'
                }
            });
        }
        else
        {
            updateMenuOption(value=>{
                value[`${questionIndex+1}`]=2;
                return({...value});
            });
            if(questionList[questionIndex]['correct_answers'][`${selectedOption[`${questionIndex}`]}_correct`]==='true')
            {
                if(`${questionIndex}` in attempted)
                {
                    if(tempSelectedOption!==null)
                    {
                        updateScore(value=>value+1);
                    }
                }
                else
                    updateScore(value=>value+1);
                updateQuestionIndex();
                updateAttempted(value=>{
                    value[`${questionIndex}`]=true;
                    return({...value});
                });
            }
            else
            {
                updateQuestionIndex();
                if(`${questionIndex}` in attempted &&attempted[`${questionIndex}`]===true)
                {
                    updateScore(value=>value-1);
                }
                updateAttempted(value=>{
                    value[`${questionIndex}`]=false;
                    return({...value});
                });
            }
        }
    }

    const submitQuizHandler=()=>{
        let payload={};
        payload['score']=score;
        let tempAttempted=Object.keys(attempted).length;
        let tempSelected=Object.keys(selectedOption).length;
        payload['attempted']=tempAttempted;
        payload['review']=tempSelected-tempAttempted;
        payload['skip']=10-tempSelected;
        prop.getQuizScore(payload);
        histories.push(`/result`);
    }

    const skipQuizHandler=()=>{
        histories.push(`/Quiz/Category`);
    }

    const skipHandler=()=>{
        if(`${questionIndex}` in selectedOption)
        {
            setSelectedOption((value)=>{
                delete value[`${questionIndex}`];
                return({...value});
            });
        }
        if(`${questionIndex}` in attempted)
        {
            if(attempted[`${questionIndex}`]===true)
            {
                updateScore(value=>value-1);
            }
            updateAttempted((value)=>{
                delete value[`${questionIndex}`];
                return({...value});
            });
        }
        updateMenuOption((value)=> {
            value[`${questionIndex+1}`]=0;
            return({...value})
        })
        updateQuestionIndex();
    }

    const reviewHandler=()=>{
        if(!(`${questionIndex}` in selectedOption))
        {
            enqueueSnackbar('please select some option', {
                variant: 'error',
                anchorOrigin: {
                    horizontal: 'right',
                    vertical: 'bottom'
                }
            });
        }
        else
        {
            if(`${questionIndex}` in attempted)
            {
                if(attempted[`${questionIndex}`]===true)
                {
                    updateScore(value=>value-1);
                }
                updateAttempted((value)=>{
                    delete value[`${questionIndex}`];
                    return({...value});
                });
            }
            updateMenuOption((value)=> {
                value[`${questionIndex+1}`]=1;
                return({...value})
            })
            updateQuestionIndex();
        }
    }

    const menuHandler=(event)=>{
        setAnchorEl(event.currentTarget);
    }

    const optionHandler=(event)=>{
        setAnchorEl(null);
        if(tempSelectedOption!==null)
        {
            setSelectedOption(value=>{
                value[`${questionIndex}`]=tempSelectedOption;
                return({...value});
            })
        }
        if(`${questionIndex}` in attempted)
            updateMenuOption(value=>{
                value[`${questionIndex+1}`]=2;
                return({...value});
            });
        const val=+(event.target.outerText)-1;
        updateIndex(val);
    }

    React.useEffect(()=>{
        fetch(`https://quizapi.io/api/v1/questions?apiKey=FeaKNKadUTrtMgqAWX3YnhZhRlV0PC50sO4zAYsu&limit=10&tags=${prop.quizCategory}`,
        {method: "GET",
        mode:'cors'}).then((res)=>{
            if(res.ok)
            {
                res.json().then((data)=>{
                    setQuestionList(data);
                })
            }
        })
    },[]);

    if(questionList.length!==0)
    return(
    <div className="Container">
        <div className="ContainerExtra">
        <Menu
                id="long-menu"
                MenuListProps={{
                'aria-labelledby': 'long-button',
                }}
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                PaperProps={{
                style: {
                    maxHeight:216,
                    width: '20ch',
                },
                }}
            >
                {Object.keys(menuOption).map((option) => (
                <MenuItem data={option} key={option} selected={option == questionIndex+1} onClick={optionHandler}>
                    <MenuOption data={option} colors={menuOption[`${option}`]===2?'#A0D995':(menuOption[`${option}`]===1?'blue':'grey')}></MenuOption>
                </MenuItem>
                ))}
        </Menu>
        <div className="menuContainer">
            <IconButton 
                className='menuButton'
                aria-label="more"
                id="long-button"
                aria-haspopup="true"
                onClick={menuHandler}
            >
                <MenuIcon />
            </IconButton>
        </div>
        <div className="quizContainer">
            <div className="quiz">
                <div className="question">
                    {questionList.length!==0&&questionList[questionIndex].question}
                </div>
                <div className="optionContainer">
                    {option&&Object.keys(option).map((key)=>{
                        return(<button className={`${questionIndex}` in selectedOption&&selectedOption[`${questionIndex}`]===key?"selectedOption":"option"} key={`${key}`} name={`${key}`} onClick={selectOptionHandler}>{option[`${key}`]}</button>);
                    })}
                </div>
                <div className='buttonBar'>
                <Button variant="contained" onClick={skipHandler}>Skip</Button>
                <Button variant="contained" color='secondary' onClick={reviewHandler}>Keep For Review</Button>
                <Button variant="contained" color="success" onClick={submitHandler}>
                    Submit
                </Button>
                </div>
            </div>
            <div className="quizButton">
                <Button variant="contained" onClick={skipQuizHandler}>Skip Quiz</Button>
                <Button variant="contained" color="success" onClick={submitQuizHandler}>Submit Quiz</Button>
            </div>
        </div>
        </div>
    </div>)
    else
    return(
        <Loading />
    )
}

export default Quiz;