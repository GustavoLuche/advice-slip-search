import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import AdviceList from "./components/AdviceList.js";
import { searchAdviceByTerm } from "./services/adviceService";

function App() {
  // Inicialização dos estados
  const [adviceList, setAdviceList] = useState([]);
  const [error, setError] = useState(null);

  // Função para lidar com a pesquisa de conselhos
  const handleSearch = async (term) => {
    try {
      const adviceData = await searchAdviceByTerm(term);
      setAdviceList(adviceData);
      setError(null);
    } catch (err) {
      setAdviceList([]);
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <Header title="Advice Slip Search" />
      <div className="container">
        <Search onSearch={handleSearch} />
        {error && <p className="text-danger mt-4 mb-4 text-center">{error}</p>}
        <AdviceList adviceList={adviceList} />
      </div>
    </div>
  );
}

export default App;
