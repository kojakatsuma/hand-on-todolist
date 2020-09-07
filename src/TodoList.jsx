import React, { useState } from 'react'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'

export const TodoList = () => {
  const todosMock = [
    { name: '掃除', dueDate: new Date('2021-07-14T00:00:00') },
    { name: '皿洗い', dueDate: new Date('2020-07-13T00:00:00') },
    { name: '犬を洗う', dueDate: new Date('2020-07-15T00:00:00') },
  ]
  const [todos, setTodos] = useState(todosMock)

  const createTodo = (name, dueDate) => {
    const startTime = Date.now()

    while (true) {
      const diffTime = Date.now() - startTime
      if (diffTime >= 5000) {
        break // 指定時間経過したら関数の実行を終了
      }
    }
    setTodos(todos.concat({ name, dueDate: new Date(dueDate) }))
  }

  const deleteTodo = (deleteIndex) => {
    setTodos(todos.filter((_todo, i) => i !== deleteIndex))
  }

  return (
    <>
      <h2>TODO一覧</h2>
      {todos.map((todo, index) => (
        <div key={index}>
          <Todo name={todo.name} dueDate={todo.dueDate} />
          <button onClick={() => deleteTodo(index)}>削除</button>
        </div>
      ))}
      <TodoForm createTodo={createTodo} />
    </>
  )
}
