import React from 'react';
import PrecisoEstudar from './components/PrecisoEstudar';
import './App.css'; // Importando o CSS

const App = () => {
  return (
    <div className="container">
      <h1>Minha Lista de Estudos</h1>
      <PrecisoEstudar nomeDaTecnologia="ReactJS" />
    </div>
  );
}

export default App;
