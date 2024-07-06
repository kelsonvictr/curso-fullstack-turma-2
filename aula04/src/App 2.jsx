import React from 'react'

const App = () => {

  const estilo = {
    color: '#ff0000',
    backgroundColor: '#0000ff',
    width: '200px',
    textAlign: 'center'
  }

  return (
    <div style={estilo}>
      Texto com estilo inline
    </div>
  )
}

export default App