import React, { useState } from 'react'
import { useEffect } from 'react'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'

const getTodos = async () => {
  return fetch('http://localhost:4000/todo')
    .then((res) => res.json())
    .then((todos) =>
      todos.map((todo) => ({ ...todo, dueDate: new Date(todo.dueDate) })),
    )
}

const postTodo = async (name, dueDate) => {
  return fetch('http://localhost:4000/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, dueDate }),
  }).then((res) => {
    if (res.status !== 200) {
      throw new Error('failed create Todo')
    }
  })
}

const deleteTodoById = async (id) => {
  return fetch(`http://localhost:4000/todo/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res.status !== 200) {
      throw new Error('failed create Todo')
    }
  })
}

const updateTodo = async (todo, checked) => {
  return fetch(`http://localhost:4000/todo/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...todo, checked }),
  }).then((res) => {
    if (res.status !== 200) {
      throw new Error('failed create Todo')
    }
  })
}

export const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getTodos().then((todos) => {
      setTodos(todos)
      setLoading(false)
    })
  }, [])

  const createTodo = async (name, dueDate) => {
    setLoading(true)
    await postTodo(name, dueDate)
    const todos = await getTodos()
    setTodos(todos)
    setLoading(false)
  }

  const deleteTodo = async (todoId) => {
    setLoading(true)
    await deleteTodoById(todoId)
    const todos = await getTodos()
    setTodos(todos)
    setLoading(false)
  }

  const changeTodo = (todo) => async (checked) => {
    setLoading(true)
    await updateTodo(todo, checked)
    setTodos(await getTodos())
    setLoading(false)
  }

  return (
    <>
      <h2>TODO一覧</h2>
      <div style={{ opacity: loading ? 0.5 : 1 }}>
        {todos.map((todo, index) => (
          <div key={index}>
            <Todo  checked={todo.checked} name={todo.name} dueDate={todo.dueDate} onChange={changeTodo(todo)} />
            <button onClick={() => deleteTodo(todo.id)}>削除</button>
          </div>
        ))}
        <TodoForm createTodo={createTodo} />
      </div>
    </>
  )
}
