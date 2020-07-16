import React, { useState } from 'react'

export const App = () => {
  const [todos, setTodos] = useState([{}])
  return (
    <>
      {todos.map((todo, i) => (
        <div key={i}>{todo.name} </div>
      ))}
      <button
        onClick={() => {
          todos.push({ name: 'task' })
          setTodos(todos)
        }}
      >
        Add
      </button>
    </>
  )
}
