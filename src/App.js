import './App.css';
import {useState} from 'react';
import ExploreMore from './Components/ExploreMore.jsx'
import Explore from './Components/Explore.jsx'
import Report from './Components/Report.jsx'
import Home from './Components/Home.jsx';
import Header from './Components/Header.jsx';
import Timer from './Components/Categories/timer';
import Quiz from './Components/Categories/quiz';
import Result from './Components/Categories/result';
import {BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';
import React from 'react';

function App() {
  const [quizCategory,setQuizCategory]=useState(null);
  const [quizData,setQuizData]=useState(null);
  const updateQuizCategory=(category)=>{
    setQuizCategory(category);
  }
  const getQuizScore=(data)=>{
    setQuizData(data);
  }
  return (
    <Router>

      <div className="App">
          <Header/>
          <Redirect to="/Home"/>
          <Switch>
            <Route path="/Home" component={Home}></Route>
            <Route exact path="/Explore" component={ExploreMore}/>
            <Route path="/Report" component={Report}/>
            <Route path="/Quiz/Category"><Explore updateQuizCategory={updateQuizCategory}/></Route>
            <Route exact path="/DevOps"><Timer /></Route>
            <Route exact path="/Linux"><Timer /></Route>
            <Route exact path="/MySQL"><Timer /></Route>
            <Route exact path="/Docker"><Timer /></Route>
            <Route exact path="/BASH"><Timer /></Route>
            <Route exact path="/Laravel"><Timer /></Route>
            <Route exact path="/Kubernetes"><Timer /></Route>
            <Route exact path='/playQuiz'><Quiz quizCategory={quizCategory} getQuizScore={getQuizScore}/></Route>
            <Route exact path='/result'><Result scorePayload={quizData}/></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
