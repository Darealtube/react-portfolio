import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGrinStars} from '@fortawesome/free-regular-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import {abouts} from './texts/texts.js';
import {$} from 'jquery';

function App() {

  return (
    <div>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <div className="nav" id="nav">
    <a href="#home" data-scroll="home">Home</a>
    <a href="#about" data-scroll="about">About</a>
    <a href="#proj">Projects</a>
    <a href="#link">Links</a>
    </div>

    <div id="home" data-anchor="home" className="first">
      <span className="intro">
      <div className="intro-wrapper">
      <FontAwesomeIcon id="grin" icon={faGrinStars}/><br/>
      <h1>Hey! Welcome.</h1>
      <h2>This is my portfolio, created with React, HTML, and CSS.</h2>
      </div>
      </span>
    </div>

    <div id="about" className="second" data-anchor="about">
    <img src={require('./images/darryl2.png')} alt="Darryl's Facebook Profile Picture" style={{borderRadius: "50%"}} width="100" height="100"/>
    <br/>
      <span className="about">
      <h1>About Me:</h1>
      <br/><br/>
      <p>{abouts}</p>
      </span>
    </div>

    <div id="proj">
    <h1 className="proj">Projects</h1><br/>
    <span className="row">
      <div className="col-xs-4 con"> <img src={require('./images/Calculator.png')} className="img-responsive fit-image"/><div className="card" style={{width:"inherit"}}>LOL</div> </div>
    <span>  <div className="con col-xs-4 mx-4"> <img src={require('./images/Pomodoro.png')} className="img-responsive fit-image"/><div className="card" style={{width:"inherit"}}>LOL</div> </div> </span>
    <span><div className="con col-xs-4"> <img src={require('./images/dr.png')} className="img-responsive fit-image"/><div className="card" style={{width:"inherit"}}>LOL</div>                                </div></span>
      </span>

      <span className="row">
        <div className="col-xs-4 con2"> <img src={require('./images/im1.png')} className="img-responsive fit-image"/><div className="card" style={{width:"inherit"}}>LOL</div> </div>
      <span>  <div className="con2 col-xs-4 mx-4"> <img src={require('./images/mar2.png')} className="img-responsive fit-image"/><div className="card" style={{width:"inherit"}}>LOL</div>   </div> </span>
      <span><div className="con2 col-xs-4">  <img src={require('./images/this.png')} className="img-responsive fit-image"/><div className="card" style={{width:"inherit"}}>LOL</div> </div></span>
      </span>
    </div>

    <div id="link">

    </div>

</div>
  );
}

export default App;
