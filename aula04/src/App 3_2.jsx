import React from 'react';

const App = () => {
  const isPrimary = false; 
  const isLarge = false;

  const style = isPrimary && isLarge
    ? {
        color: '#ffffff',
        backgroundColor: '#0000ff',
        width: '400px',
        padding: '20px'
      }
    : isPrimary && !isLarge
    ? {
        color: '#ffffff',
        backgroundColor: '#008000',
        width: '200px',
        padding: '10px'
      }
    : !isPrimary && isLarge
    ? {
        color: '#000000',
        backgroundColor: '#ffff00',
        width: '300px',
        padding: '15px'
      }
    : {
        color: '#000000',
        backgroundColor: '#808080',
        width: '150px',
        padding: '5px'
      };

  return (
    <div style={style}>
      Texto com estilo inline dinâmico
    </div>
  );
};

export default App;
