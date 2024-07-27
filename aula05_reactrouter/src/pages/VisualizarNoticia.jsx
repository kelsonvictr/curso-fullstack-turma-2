import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const VisualizarNoticia = () => {

    const { id } = useParams()

    const [noticia, setNoticia] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:3000/noticias/${id}`)
        .then(response => {
            setNoticia(response.data)
        })
        .catch(error => console.error("Ocorreu um erro: ", error))
    }, [])


  return (
    <div>
        <h2>{noticia.titulo}</h2>
        <p>{noticia.texto}</p>
    </div>
  )
}

export default VisualizarNoticia