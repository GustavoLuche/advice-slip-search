import React from "react";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import Search from "./components/Search";
import SpinnerLoading from "./components/SpinnerLoading";
import ErrorMessage from "./components/ErrorMessage";
import SearchInfo from "./components/SearchInfo";
import Paginator from "./components/Paginator";
import AdviceList from "./components/AdviceList.js";
import Footer from "./components/Footer";
import { useAdviceContext } from "./context/AdviceContext";
import "./App.css";

function App() {
  // Usando o contexto para acessar o estado e funções
  const { state, searchAdviceByTerm, handlePageChange } = useAdviceContext();
  const { adviceList, error, isLoading, searchTerm, currentPage, searchPerformed, itemsPerPage } = state;

  return (
    <div className="App">
      <Header title="Advice Slip Search" />
      <Greeting />
      <div className={`App-container container ${searchPerformed ? "" : "no-search-performed"}`}>
        <Search onSearch={searchAdviceByTerm} />
        {isLoading && <SpinnerLoading />}
        {!isLoading && !error && searchTerm !== "" && (
          <>
            <SearchInfo totalResults={adviceList.length} searchTerm={searchTerm} />
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
