import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ListarAlunos = () => {

    const urlBase = "http://localhost:3000"
    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        axios.get(`${urlBase}/alunos`)
        .then(response => {
            setAlunos(response.data)
        })
        .catch(error => console.error("Ocorreu um erro: ", error))
    }, [])

  return (
    <div>
        {
          alunos.map(aluno => (
            <p key={aluno.id}>{aluno.nome} - {aluno.email}</p>
          ))  
        }
    </div>
  )
}

export default ListarAlunos