import React, { useState } from 'react'

export const TodoForm = (props) => {
  const { createTodo } = props
  const [name, setName] = useState('')
  const [dueDate, setDueDate] = useState('')
  const changeName = (e) => setName(e.target.value)
  const changeDueDate = (e) => setDueDate(e.target.value)
  return (
    <>
      <h2>TODO入力フォーム</h2>
      <div>
        <input value={name} onChange={changeName} />
      </div>
      <div>
        <input value={dueDate} type="datetime-local" onChange={changeDueDate} />
      </div>
      <button onClick={() => createTodo(name, dueDate)}>作成</button>
    </>
  )
}
