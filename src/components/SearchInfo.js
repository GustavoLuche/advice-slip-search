import React from "react";

function SearchInfo({ totalResults, searchTerm }) {
  return (
    <div className="App-search-info">
      <p>
        <strong>Search Term:</strong> {searchTerm}{" "}
      </p>
      <p>
        {totalResults === 1
          ? "1 result found."
          : `${totalResults} results found.`}
      </p>
    </div>
  );
}

export default SearchInfo;
