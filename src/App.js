import React from 'react';
import './App.css';
import './style.css';
import SearchMovies from "./SearchMovies";

function App() {
  return (
    <div className="container">
      <div className="title">
        <h1>React Movie Search</h1>
        <SearchMovies/>
      </div>
    </div>
  );
}

export default App;
