import React, { useState } from "react";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import Search from "./components/Search";
import SpinnerLoading from "./components/SpinnerLoading";
import ErrorMessage from "./components/ErrorMessage";
import SearchInfo from "./components/SearchInfo";
import AdviceList from "./components/AdviceList.js";
import { searchAdviceByTerm } from "./services/adviceService";

function App() {
  // Inicialização dos estados
  const [adviceList, setAdviceList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
    }
  };

  return (
    <div className="App">
      <Header title="Advice Slip Search" />
      <Greeting />
      <div className="container">
        <Search onSearch={handleSearch} />
        {isLoading && <SpinnerLoading />}
        {!isLoading && !error && searchTerm !== "" && (
          <SearchInfo
            totalResults={adviceList.length}
            searchTerm={searchTerm}
          />
        )}
        {!isLoading && !error && <AdviceList adviceList={adviceList} />}
        {error && !isLoading && <ErrorMessage message={error} />}
      </div>
    </div>
  );
}

export default App;
