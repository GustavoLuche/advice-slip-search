import React, { useState } from "react";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import Search from "./components/Search";
import SpinnerLoading from "./components/SpinnerLoading";
import ErrorMessage from "./components/ErrorMessage";
import SearchInfo from "./components/SearchInfo";
import Paginator from "./components/Paginator";
import AdviceList from "./components/AdviceList.js";
import Footer from "./components/Footer";
import { searchAdviceByTerm } from "./services/adviceService";
import "./App.css"

function App() {
  // Inicialização dos estados
  const [adviceList, setAdviceList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Função para lidar com a pesquisa de conselhos
  const handleSearch = async (term) => {
    try {
      setIsLoading(true);
      setSearchTerm(term);
      const adviceData = await searchAdviceByTerm(term);
      setAdviceList(adviceData);
      setError(null);
    } catch (err) {
      setAdviceList([]);
      setError(err.message);
    } finally {
      setIsLoading(false);
      setCurrentPage(1);
    }
  };

  // Função para lidar com a mudança de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <Header title="Advice Slip Search" />
      <Greeting />
      <div className="container">
        <Search onSearch={handleSearch} />
        {isLoading && <SpinnerLoading />}
        {!isLoading && !error && searchTerm !== "" && (
          <>
            <SearchInfo
              totalResults={adviceList.length}
              searchTerm={searchTerm}
            />
            <Paginator
              totalResults={adviceList.length}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
            />
            <AdviceList
              adviceList={adviceList}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
            />
          </>
        )}
        {error && !isLoading && <ErrorMessage message={error} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
