import React, { useState } from 'react'

const TodoList = () => {

    const [tarefas, setTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState("")

    const adicionarTarefa = () => {
        setTarefas([...tarefas, novaTarefa])
        setNovaTarefa("")
    }

  return (
    <div className="todo-list">
        <h2>Lista de Tarefas</h2>
        <input
            type="text"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            placeholder="Digite uma nova tarefa"
        />
        <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
        <ul>
            {tarefas.map((tarefa, index) => (
               <li key={index}>{tarefa}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList