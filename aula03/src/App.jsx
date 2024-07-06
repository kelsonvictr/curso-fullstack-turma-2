import React from 'react'
import './App.css'
import TodoList from './components/TodoList'

const App = () => {

  return (
    <div className="container">
         <h1>Desafio de useState: To-Do List Simples</h1>
         <TodoList />
    </div>
  )
}

export default App