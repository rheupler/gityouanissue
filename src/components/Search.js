import React from 'react';
import './Search.css'

const Search = ({ handleSearch }) =>
  <div className="search-bar">
    <form onSubmit={handleSearch}>
      <input placeholder="Search by keyword..." id="search-input" type="text"/>
      <button className="search-btn" type="submit">Submit</button>
    </form>
  </div>

export default Search;
