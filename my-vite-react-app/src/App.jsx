import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResultCard from './components/SearchResultCard';
import data from './data.json'; // Importa los datos

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResults, setSelectedResults] = useState([]);
  const [selectedResultId, setSelectedResultId] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = (query) => {
    const filteredResults = data.filter((result) =>
      result.name.toLowerCase().includes(query.toLowerCase()) ||
      result.email.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
    setSearchPerformed(true);
  };

  const handleSelectResult = (id) => {
    const selectedResult = searchResults.find((result) => result.id === id);
    setSelectedResults((prevSelectedResults) => [...prevSelectedResults, selectedResult]);
    setSelectedResultId(null);
  };

  const handleDeleteSelectedResult = (id) => {
    const updatedSelectedResults = selectedResults.filter((result) => result.id !== id);
    setSelectedResults(updatedSelectedResults);
  };

  return (
    <div className="App">
      <h1>Buscador en Vite React</h1>
      <SearchBar onSearch={handleSearch} />
      {searchPerformed && (
        <div className="sections-container">
          <div className="search-results-section">
            <h2>Resultados de la búsqueda</h2>
            <div className="search-results">
              {searchResults.map((result) => (
                <SearchResultCard
                  key={result.id}
                  result={result}
                  onSelect={() => handleSelectResult(result.id)}
                  isSelected={result.id === selectedResultId}
                />
              ))}
            </div>
          </div>
          <div className="selected-results-section">
            <h2>Objetos seleccionados</h2>
            <div className="selected-results">
              {selectedResults.map((result) => (
                <div key={result.id} className="selected-result">
                  <p>{result.name}</p>
                  <p>Email: {result.email}</p>
                  <button onClick={() => handleDeleteSelectedResult(result.id)}>Eliminar</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
