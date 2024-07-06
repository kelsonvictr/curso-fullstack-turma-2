import React from 'react'

const App = () => {

  const condicional = false;
  
  const style = condicional
    ? {
        color: '#ffa500',
        backgroundColor: '#808080',
        height: '150px',
        margin: '20px'
      }
    : {
        color: '#008000',
        backgroundColor: '#ffff00',
        height: '100px',
        margin: '10px'
      };
  

  return (
    <div style={style}>
      Texto com estilo inline dinâmico
    </div>
  )
}

export default App