import React, { useState } from 'react'

export const App = () => {
  const [todoList, setTodoList] = useState([{}])
  return (
    <>
      {todoList.map((todo, i) => (
        <div key={i}>{todo.name} </div>
      ))}
      <button
        onClick={() => {
          todoList.push({ name: '掃除' })
          setTodoList(todoList)
        }}
      >
        Add
      </button>
    </>
  )
}
