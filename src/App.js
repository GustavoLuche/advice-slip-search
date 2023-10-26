import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {

  return (
    <div className="App">
      <Header title="Advice Slip Search" />
      <div className="container">
        <Search onSearch={null} />
      </div>
    </div>
  );
}

export default App;
