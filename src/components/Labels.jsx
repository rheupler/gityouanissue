import React from "react";
import "./Labels.css";

const Labels = ({ handleLabelChange }) => (
  <div className="labels">
    <p>Filter by label:</p>
    <div className="label btn-wrapper-label">
      <button
        onClick={handleLabelChange}
        value="bug"
        className="label button active"
      >
        Bug
      </button>
      <button
        onClick={handleLabelChange}
        value="help-wanted"
        className="label button"
      >
        Help Wanted
      </button>
      <button
        onClick={handleLabelChange}
        value="good-first-bug"
        className="label button"
      >
        Good first bug
      </button>
      <button
        onClick={handleLabelChange}
        value="first-timers-only"
        className="label button"
      >
        First-timers only
      </button>
    </div>
    <p className="lang-header">Or by language:</p>
    <div className="label-language btn-wrapper-lang">
      <button
        onClick={handleLangChange}
        value=""
        className="label button active"
      >
        Any
      </button>
      <button
        onClick={handleLangChange}
        value="JavaScript"
        className="label javascript button"
      >
        JavaScript
      </button>
      <button
        onClick={handleLangChange}
        value="Python"
        className="label javascript button"
      >
        Python
      </button>
      <button
        onClick={handleLangChange}
        value="Java"
        className="label java button"
      >
        Java
      </button>
      <button
        onClick={handleLangChange}
        value="PHP"
        className="label php button"
      >
        PHP
      </button>
      <button
        onClick={handleLangChange}
        value="Ruby"
        className="label ruby button"
      >
        Ruby
      </button>
    </div>
  </div>
);

export default Labels;
