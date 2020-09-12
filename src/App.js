import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGrinStars} from '@fortawesome/free-regular-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import {abouts} from './texts/texts.js';

function App() {
  return (
    <div>

    <div id="wrap">
    <div className="first">
    <div className="bg"></div>
      <span className="intro">
      <FontAwesomeIcon id="grin" icon={faGrinStars}/> <br/><br/>
      <h1>Hey! Welcome.</h1>
      <h2>This is my portfolio, created with React, HTML, and CSS.</h2>
      </span>
    </div>

    <div className="second">
    <div className="bg2"></div>
      <span className="about">

      <img src={require('./images/darryl2.png')} width="180" height="180"/>
      <br/><br/>
      <h1>About Me:</h1>
      <p>{abouts}</p>
      </span>
    </div>
    </div>

    </div>
  );
}

export default App;
