import React from 'react';

const Search = ({ handleSearch }) =>
  <div className="search-bar">
    <form onSubmit={handleSearch}>
      <input placeholder="Search by keyword..." id="search-input" type="text"/>
      <button type="submit">Submit</button>
    </form>
  </div>

export default Search;
