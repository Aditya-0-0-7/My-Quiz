import React from 'react'
import './ExploreMore.css'
import {Link} from 'react-router-dom';
import linux from './Images/linux.png';
import docker from './Images/docker.png';
import bash from './Images/bash.png';
import laravel from './Images/laravel.png';
import mysql from './Images/mysql.png';
import kubernetes from './Images/kubernetes.png';
import devops from './Images/devops.png';

function ExploreMore() {
    return (
        <div className="exploreMore">
            <div className="temp-data">
                
            </div>
            <div className="heading-exploreMore">
                <h1>Explore Quiz !</h1>
            </div>
            <div className="tempered">
                <h2>Categories</h2>
            </div>
            <div className="exploreMore-content">
                <div className="card">
                    <img className="exploreMore-Image" src={linux} alt="" />
                    <div className="card-heading">
                        <h3>Linux</h3>
                    </div>
                </div>
                <div className="card">
                    <img className="exploreMore-Image" src={docker} alt="" />
                    <div className="card-heading">
                        <h3>Docker</h3>
                    </div> 
                </div>
                <div className="card">
                    <img className="exploreMore-Image"  src={bash} alt="" />
                    <div className="card-heading">
                        <h3>Bash</h3>
                    </div>
                </div>
                <div className="card">
                    <img className="exploreMore-Image"  src={laravel} alt="" />
                    <div className="card-heading">
                        <h3>Laravel</h3>
                    </div>
                </div>
                <div className="card">
                    <img className="exploreMore-Image"  src={mysql} alt="" />
                    <div className="card-heading">
                        <h3>MySql</h3>
                    </div> 
                </div>
                <div className="card">
                    <img className="exploreMore-Image"  src={kubernetes} alt="" />
                    <div className="card-heading">
                        <h3>Kubernetes</h3>
                    </div>
                </div>
                <div className="card">
                    <img className="exploreMore-Image"  src={devops} alt="" />
                    <div className="card-heading">
                        <h3>DevOps</h3>
                    </div>
                </div>
            </div>
            <div className="exploreMore-button">
                <button type="button"><Link className="quiznow-Button" aria-current="page" to="/Home">Join Now</Link></button>
            </div>
            
        </div>
    )
}

export default ExploreMore
