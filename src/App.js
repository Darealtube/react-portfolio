import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGrinStars} from '@fortawesome/free-regular-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import {abouts} from './texts/texts.js';

function App() {
  return (
    <div>

    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <div className="first">
      <span className="intro">
      <FontAwesomeIcon id="grin" icon={faGrinStars}/> <br/><br/>
      <h1>Hey! Welcome.</h1>
      <h2>This is my portfolio, created with React, HTML, and CSS.</h2>
      </span>
    </div>

    <div className="second">
      <span className="about">
      <img src={require('./images/darryl2.png')} width="50" height="50"/>
      <br/><br/>
      <h1>About Me:</h1>
      <p>{abouts}</p>
      </span>
    </div>

    </div>
  );
}

export default App;
