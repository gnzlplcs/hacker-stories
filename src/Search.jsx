import React from "react";

const Search = ({ search, onSearch }) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={onSearch} value={search} />
      <p>
        Searching for <strong>{search}</strong>
      </p>
    </div>
  );
};

export default Search;