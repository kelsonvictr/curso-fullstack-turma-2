import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Noticias = () => {

    const [noticias, setNoticias] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/noticias")
        .then(response => {
            setNoticias(response.data)
        })
        .catch(error => console.error("Ocorreu um erro: ", error))
    }, [])


  return (
    <div>
        <h1>Página de noticias</h1>
        {
            noticias.map(noticia => (
                <a href={`/visualizar-noticia/${noticia.id}`}><h2 key={noticia.id}>{noticia.titulo}</h2></a>
            ))
        }
    </div>
  )
}

export default Noticias