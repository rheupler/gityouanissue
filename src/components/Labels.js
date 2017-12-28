import React from 'react';
import './Labels.css';

const Labels = (props) => (
  <div className="labels">
    <p>Filter by label:</p>
    <div className="label btn-wrapper-label">
      <button onClick={props.handleLabelChange} value="bug" className="label button active">Bug</button>
      <button onClick={props.handleLabelChange} value="help-wanted" className="label button">Help Wanted</button>
      <button onClick={props.handleLabelChange} value="first-timers-only" className="label button">First-timers only</button>
      <button onClick={props.handleLabelChange} value="good-first-bug" className="label button">Good first bug</button>
    </div>
    <p className="lang-header">Or by language:</p>
    <div className="label-language btn-wrapper-lang">
      <button onClick={props.handleLangChange} value="" className="label button active">Any</button>
      <button onClick={props.handleLangChange} value="JavaScript" className="label javascript button">JavaScript</button>
      <button onClick={props.handleLangChange} value="Python" className="label javascript button">Python</button>
      <button onClick={props.handleLangChange} value="Java" className="label java button">Java</button>
      <button onClick={props.handleLangChange} value="PHP" className="label php button">PHP</button>
      <button onClick={props.handleLangChange} value="Ruby" className="label ruby button">Ruby</button>
    </div>
  </div>
)

export default Labels;
