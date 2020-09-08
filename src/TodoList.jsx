import React, { useState, useEffect } from 'react'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'

const fetchAllTodos = async () => {
  const todos = await fetch('http://localhost:4000/todo').then((response) =>
    response.json(),
  )
  return todos.map((todo) => ({ ...todo, dueDate: new Date(todo.dueDate) }))
}

export const TodoList = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchAllTodos().then((todos) => setTodos(todos))
  }, [])

  const createTodo = async (name, dueDate) => {
    const response = await fetch('http://localhost:4000/todo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, dueDate, checked: false }),
    })
    if (response.ok) {
      const todos = await fetchAllTodos()
      setTodos(todos)
    }
  }

  const deleteTodo = async (id) => {
    const response = await fetch(`http://localhost:4000/todo/${id}`, {
      method: 'DELETE',
    })
    if (response.ok) {
      const todos = await fetchAllTodos()
      setTodos(todos)
    }
  }

  const updateTodo = (todo) => async (checked) => {
    const response = await fetch(`http://localhost:4000/todo/${todo.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...todo, checked }),
    })
    if (response.ok) {
      const todos = await fetchAllTodos()
      setTodos(todos)
    }
  }

  return (
    <>
      <h2>TODO一覧</h2>
      {todos.map((todo, index) => (
        <div key={index}>
          <Todo
            name={todo.name}
            dueDate={todo.dueDate}
            checked={todo.checked}
            onChange={updateTodo(todo)}
          />
          <button onClick={() => deleteTodo(todo.id)}>削除</button>
        </div>
      ))}
      <TodoForm createTodo={createTodo} />
    </>
  )
}
