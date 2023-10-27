import React from "react";
import Pagination from "react-bootstrap/Pagination";

function Paginator({ totalResults, currentPage, itemsPerPage, onPageChange }) {
  const totalPages = Math.ceil(totalResults / itemsPerPage);

  return (
    <div className="App-paginator d-flex justify-content-center mb-3">
      <Pagination className="m-0">
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index}
            active={currentPage === index + 1}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
}

export default Paginator;
