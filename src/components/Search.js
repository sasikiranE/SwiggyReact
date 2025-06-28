import React from "react";

const Search = ({ value, onChange, onSearch }) => {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search restaurants"
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      ></input>
      <button className="search-btn" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
