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

  return (
    <div className="App-search">
      <Form>
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
            Search
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Search;
