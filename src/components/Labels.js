import React from 'react';
import './Labels.css';

const Labels = (props) => (
  <div className="labels">
    <div className="label-type">
      <p>What would you like to work with:</p>
      <button value="Help wanted" className="label help-wanted button">Help Wanted</button>
      <button value="bug" className="label bug button">Bug</button>
      <button value="first-timers" className="label first-timers button">First-timers only</button>
      <button value="good-first" className="label good-first button">Good first bug</button>
    </div>
    <div className="label-language">
      <button onClick={props.handleClick} value="JavaScript" className="label javascript button">JavaScript</button>
      <button onClick={props.handleClick} value="Python" className="label javascript button">Python</button>
      <button onClick={props.handleClick} value="Java" className="label java button">Java</button>
      <button onClick={props.handleClick} value="CSS" className="label css button">CSS</button>
      <button onClick={props.handleClick} value="PHP" className="label css button">PHP</button>
    </div>
  </div>
)

export default Labels;
