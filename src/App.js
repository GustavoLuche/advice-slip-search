import React, { useState } from "react";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import Search from "./components/Search";
import SpinnerLoading from "./components/SpinnerLoading";
import ErrorMessage from "./components/ErrorMessage";
import SearchInfo from "./components/SearchInfo";
import Paginator from "./components/Paginator";
import AdviceList from "./components/AdviceList.js";
import { searchAdviceByTerm } from "./services/adviceService";

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

  // Calcular o índice do primeiro item na página atual
  const startIndex = (currentPage - 1) * itemsPerPage;

  // Filtrar a lista de conselhos para exibir apenas os itens da página atual
  const adviceListToDisplay = adviceList.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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
          </>
        )}
        {!isLoading && !error && (
          <AdviceList adviceList={adviceListToDisplay} />
        )}
        {error && !isLoading && <ErrorMessage message={error} />}
      </div>
    </div>
  );
}

export default App;
