import React from 'react';

function SearchResultCard({ result, onSelect, isSelected }) {
  return (
    <div className={`result-card ${isSelected ? 'selected' : ''}`}>
      <h2>{result.name}</h2>
      <p>Email: {result.email}</p>
      <button onClick={onSelect}>Seleccionar</button>
    </div>
  );
}

export default SearchResultCard;
