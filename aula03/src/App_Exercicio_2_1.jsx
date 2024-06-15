import React from 'react';
import CelsiusParaFahrenheit from './CelsiusParaFahrenheit';
import FahrenheitParaCelsius from './FahrenheitParaCelsius';
import QuilometroParaMilhas from './QuilometroParaMilhas';
import MilhasParaQuilometro from './MilhasParaQuilometro';
import './App.css'; // Importando o CSS

const App = () => {
  return (
    <div className="container">
      <h1>Conversões de Unidades</h1>
      <CelsiusParaFahrenheit celsius={25} />
      <FahrenheitParaCelsius fahrenheit={77} />
      <QuilometroParaMilhas quilometros={100} />
      <MilhasParaQuilometro milhas={62} />
    </div>
  );
}

export default App;
