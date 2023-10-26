import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import SpinnerLoading from "./components/SpinnerLoading";
import AdviceList from "./components/AdviceList.js";
import { searchAdviceByTerm } from "./services/adviceService";

function App() {
  // Inicialização dos estados
  const [adviceList, setAdviceList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Função para lidar com a pesquisa de conselhos
  const handleSearch = async (term) => {
    try {
      setIsLoading(true);
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
      <div className="container">
        <Search onSearch={handleSearch} />
        {isLoading && <SpinnerLoading />}
        {!isLoading && !error && <AdviceList adviceList={adviceList} />}
        {error && !isLoading && (
          <p className="text-danger mt-4 mb-4 text-center">{error}</p>
        )}
      </div>
    </div>
  );
}

export default App;
