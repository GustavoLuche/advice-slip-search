import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Função para lidar com a pesquisa
function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (typeof onSearch === "function" && searchQuery.trim() !== "") {
      onSearch(searchQuery);
      setSearchQuery("");
    } else {
      console.error("Invalid onSearch function or empty search term.");
    }
  };

  // Manipulador para envio de formulário com Enter
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="App-search mb-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="d-flex">
          <Form.Control
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            className="ms-2 "
            variant="primary"
            onClick={handleSearch}
            disabled={searchQuery.trim() === ""}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Search;
