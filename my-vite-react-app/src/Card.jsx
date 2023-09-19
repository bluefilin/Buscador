// SearchResultCard.js
import React from 'react';

function SearchResultCard({ result }) {
  return (
    <div className="result-card">
      <h2>{result.title}</h2>
      <p>{result.description}</p>
    </div>
  );
}

export default SearchResultCard;
