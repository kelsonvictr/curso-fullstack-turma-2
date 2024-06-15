import React from 'react';
import TrabalhandoComImagensCondicionais from './components/TrabalhandoComImagensCondicionais';
import './App.css'; // Importando o CSS

const App = () => {
  return (
    <div className="container">
      <h1>Renderização de Imagens Condicionais</h1>
      <TrabalhandoComImagensCondicionais tipo="PUBLIC" />
      <TrabalhandoComImagensCondicionais tipo="ASSET" />
    </div>
  );
}

export default App;
