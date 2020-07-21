import React, { useState } from 'react'

export const TodoForm = ({ createTodo }) => {
  const [name, setName] = useState('')
  const [dueDate, setDueDate] = useState('')
  return (
    <>
      <h1>TODO入力フォーム</h1>
      <div>
        <input onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <input
          type="datetime-local"
          onChange={(event) => setDueDate(event.target.value)}
        />
      </div>
      <button onClick={() => createTodo(name, dueDate)}>作成</button>
    </>
  )
}
