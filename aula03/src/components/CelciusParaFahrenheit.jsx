import React from 'react'

const CelciusParaFahrenheit = ({ celcius }) => {
    const fahrenheit = (celcius * 9/5) + 32;

  return (
    <div className="conversao">
        <p>{celcius} °C é o mesmo que {fahrenheit.toFixed(2)}°F</p>
    </div>
  )
}

export default CelciusParaFahrenheit