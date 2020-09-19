import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGrinStars, faHeart} from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import 'bootstrap/dist/css/bootstrap.min.css';
import {abouts} from './texts/texts.js';
import {$} from 'jquery';
library.add(fab);

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
    <img src={require('./images/darryl2.png')} alt="Darryl's Facebook Profile" style={{borderRadius: "50%"}} id="darpic"/>
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
      <div className="col-xs-4 con"> <img alt="React Hook Calculator" src={require('./images/Calculator.png')} className="img-responsive fit-image"/><div className="card" style={{width:"inherit"}}>React Hook Calculator</div> </div>
    <span>  <div className="con col-xs-4 mx-4"> <img alt="React Hook Pomodoro" src={require('./images/Pomodoro.png')} className="img-responsive fit-image"/><div className="card" style={{width:"inherit"}}>React Hook Pomodoro Clock</div> </div> </span>
    <span><div className="con col-xs-4"> <img alt="React Hook Drum Pad" src={require('./images/dr.png')} className="img-responsive fit-image"/><div className="card" style={{width:"inherit"}}>React Hook Drum Pad</div>                                </div></span>
      </span>

      <span className="row">
        <div className="col-xs-4 con2"> <img alt="React Hook Quote Machine" src={require('./images/im1.png')} className="img-responsive fit-image"/><div className="card" style={{width:"inherit"}}>React Hook Quote Machine</div> </div>
      <span>  <div className="con2 col-xs-4 mx-4"> <img alt="React Hook Markdown Previewer" src={require('./images/mar2.png')} className="img-responsive fit-image"/><div className="card" style={{width:"inherit"}}>React Hook Markdown Previewer</div>   </div> </span>
      <span><div className="con2 col-xs-4">  <img alt="This website" src={require('./images/this.png')} className="img-responsive fit-image"/><div className="card" style={{width:"inherit"}}>This Portfolio on Github</div> </div></span>
      </span>
    </div>

    <div id="link">
      <h1>Contact Me!</h1>
      <span className="row link">
        <a href="https://www.facebook.com/darryl.javier.5/"><div className="col-xs-4 fb" id="fb"><FontAwesomeIcon id="icon" icon={['fab', 'facebook']}/><span id="linktext">Darryl Javier</span></div></a>
      <a href="https://twitter.com/therealjavierr"><span> <div className="col-xs-4 twt mx-2 text-left" id="twt"><FontAwesomeIcon id="icon" icon={['fab', 'twitter']}/><span id="linktext"> @therealjavierr</span></div></span></a>
      <a href="https://github.com/Darealtube"><span> <div className="col-xs-4 disc text-left" id="disc"><FontAwesomeIcon id="icon" icon={['fab', 'github']}/><span id="linktext">Darealtube</span></div></span></a>
      </span>
       <h3 id="outro">Made with <FontAwesomeIcon icon={faHeart}/> by Darryl Javier</h3>
    </div>

</div>
  );
}

export default App;
