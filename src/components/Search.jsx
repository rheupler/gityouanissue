import React from 'react';
import './Search.css'

const Search = ({ handleSearch, clearSearch }) =>
  <div className="search-bar">
    <form onSubmit={handleSearch}>
      <input placeholder="Search by keyword..." id="search-input" type="text"/>
      <button className="search-btn" type="submit">Submit</button>
      <button className="clear-btn" onClick={clearSearch}>X</button>
    </form>
  </div>

export default Search;
