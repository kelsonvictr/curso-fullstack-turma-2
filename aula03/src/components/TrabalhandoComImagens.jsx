import React from 'react'
import goku from '../assets/goku.webp'

const TrabalhandoComImagens = () => {
  return (
    <div className="container">
        <h1>Trabalhando com Imagens</h1>
        <div className="imagens">
            <div className="imagem">
                <h2>Imagem da pasta public</h2>
                <img src="/vegeta.webp" alt="Imagem da pasta public" />
            </div>
            <div className="imagem">
                <h2>Imagem da pasta assets</h2>
                <img src={goku} alt="Imagem da pasta assets" />
            </div>

        </div>

    </div>
  )
}

export default TrabalhandoComImagens