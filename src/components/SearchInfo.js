import React from "react";

function SearchInfo({ totalResults, searchTerm }) {
  return (
    <div className="App-search-info mb-3">
      <p className="mb-2">
        <strong>Search Term:</strong> {searchTerm}{" "}
      </p>
      <p className="m-0">
        {totalResults === 1
          ? "1 result found."
          : `${totalResults} results found.`}
      </p>
    </div>
  );
}

export default SearchInfo;
