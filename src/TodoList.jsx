import React, { useState } from 'react'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'

export const TodoList = () => {
  const [todos, setTodos] = useState([])

  fetch('http://localhost:4000/todo')
    .then((res) => res.json())
    .then((todos) =>
      todos.map((todo) => ({ ...todo, dueDate: new Date(todo.dueDate) })),
    )
    .then((todos) => setTodos(todos))

  // useEffect(() => {
  //   fetch('http://localhost:4000/todo')
  //     .then((res) => res.json())
  //     .then((todos) =>
  //       todos.map((todo) => ({ ...todo, dueDate: new Date(todo.dueDate) })),
  //     )
  //     .then((todos) => setTodos(todos))
  // }, [])

  const createTodo = (name, dueDate) => {
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
