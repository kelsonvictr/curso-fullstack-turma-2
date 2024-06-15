import React from 'react';
import TodoList from './components/TodoList';
import './App.css'; // Importando o CSS

const App = () => {
  return (
    <div className="container">
      <h1>Desafio de useState: To-Do List Simples</h1>
      <TodoList />
    </div>
  );
}

export default App;
