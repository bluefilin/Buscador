import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResultCard from './Card';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const newResult = {
      title: `Resultado para "${query}"`,
      description: 'Descripción del resultado...',
    };

    if (!searchResults.some((result) => result.title === newResult.title)) {
      setSearchResults([...searchResults, newResult]);
    }
  };

  return (
    <div className="App">
      <h1>Buscador</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="search-results">
        {searchResults.map((result, index) => (
          <SearchResultCard key={index} result={result} />
        ))}
      </div>
    </div>
  );
}

export default App;
