import React from 'react';
import './Labels.css';

const Labels = (props) => (
  <div className="labels">
    <div className="label-language">
      <button onClick={props.handleClick} value="CSS" className="label css button">CSS</button>
      <button onClick={props.handleClick} value="JavaScript" className="label javascript button">JavaScript</button>
      <button onClick={props.handleClick} value="Python" className="label javascript button">Python</button>
      <button onClick={props.handleClick} value="Java" className="label java button">Java</button>
      <button onClick={props.handleClick} value="PHP" className="label php button">PHP</button>
      <button onClick={props.handleClick} value="Ruby" className="label ruby button">Ruby</button>
    </div>
  </div>
)

export default Labels;
