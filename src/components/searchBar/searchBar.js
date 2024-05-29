import React from 'react';
import './searchBar.css';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search comments"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
