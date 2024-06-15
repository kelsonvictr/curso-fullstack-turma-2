import React from 'react';
import Adicao from './components/Adicao';
import Subtracao from './components/Subtracao';
import Multiplicacao from './components/Multiplicacao';
import Divisao from './components/Divisao';
import './App.css'; // Importando o CSS

const App = () => {
  return (
    <div className="container">
      <h1>Operações Matemáticas</h1>
      <Adicao num1={10} num2={5} />
      <Subtracao num1={10} num2={5} />
      <Multiplicacao num1={10} num2={5} />
      <Divisao num1={10} num2={5} />
    </div>
  );
}

export default App;
