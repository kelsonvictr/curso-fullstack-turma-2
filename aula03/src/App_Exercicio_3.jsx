import React from 'react';
import ListaDeLivros from './ListaDeLivros';
import './App.css'; // Importando o CSS

const App = () => {
  const livros = [
    { titulo: '1984', autor: 'George Orwell', ano: 1949 },
    { titulo: 'To Kill a Mockingbird', autor: 'Harper Lee', ano: 1960 },
    { titulo: 'The Great Gatsby', autor: 'F. Scott Fitzgerald', ano: 1925 },
  ];

  return (
    <div className="container">
      <h1>Lista de Livros</h1>
      <ListaDeLivros livros={livros} />
    </div>
  );
}

export default App;
