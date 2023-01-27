import React from "react";

const Search = ({ search }) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        onChange={search.onSearch}
        value={search.term}
      />
      <p>
        Searching for <strong>{search.term}</strong>
      </p>
    </div>
  );
};

export default Search;
