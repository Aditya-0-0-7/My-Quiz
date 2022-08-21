import React, { Component } from 'react';
import "./Welcome.css";
import video from "../Video/Background.mp4";
import {Link} from 'react-router-dom';

class Welcome extends Component {
  state = {
    firstName: '',
    showName: false
  }

  displayNameHandler = (e) => {
    let updatedName = e.target.value;
    this.setState({ firstName: updatedName });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.firstName===''){
      alert('Please Enter the Name !!');
      this.setState({
        showName: false
      });

    }else{
      this.setState({
        showName: true
      });
    }
    if(this.state.showName===true){
      let name=document.querySelector('.a');
      let temp=name.value;
      localStorage.setItem("name",temp);
    }
  }

  render() {
    return (
      <div className='login-container'>
            <video autoPlay loop muted>
              <source src={video} type="video/mp4"/>
            </video>
                <div className='logos'></div>
              <div className="details">
                <form onSubmit={this.handleSubmit}>
                  <input type="text" name="firstName" onChange={this.displayNameHandler} value={this.state.firstName} placeholder="Enter Name " class='a'/>
                  {this.state.showName? <button className='btn' type="submit" onClick={this.handleSubmit}><Link className="nav-link-active" aria-current="page" to="/Quiz/Category">Join</Link></button> : <button>Join</button>}
                </form>
            </div>
          </div>
    );
  }
}
export default Welcome;