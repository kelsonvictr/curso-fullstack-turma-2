import React from 'react'

const Livro = ({ titulo, autor, ano }) => {
  return (
    <div className="livro">
        <h2>{titulo}</h2>
        <p>Autor: {autor}</p>
        <p>Ano: {ano}</p>
    </div>
  )
}

export default Livro