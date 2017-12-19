import React from 'react';
import './Labels.css';

const Labels = (props) => (
  <div className="labels">
    <p>labels will go here</p>
    <button value="Help wanted" className="label help-wanted button">Help Wanted</button>
    <button value="bug" className="label bug button">Bug</button>
    <button value="first-timers" className="label first-timers button">First-timers only</button>
    <button value="good-first" className="label good-first button">Good first bug</button>

    <button onClick={props.handleClick} value="javascript" className="label javascript button">JavaScript</button>
    <button onClick={props.handleClick} value="python" className="label javascript button">python</button>
  </div>
)

export default Labels;
