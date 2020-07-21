import React, { useState, Fragment } from 'react'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'

export const TodoList = () => {
  const [todoList, setTodoList] = useState([
    { name: '掃除', dueDate: new Date('2020-07-22T00:00:00') },
    { name: '犬を洗う', dueDate: new Date('2020-07-20T00:00:00') },
  ])

  const createTodo = (name, dueDate) => {
    setTodoList(todoList.concat({ name, dueDate: new Date(dueDate) }))
  }

  const deleteTodo = (index) => {
    todoList.splice(index, 1)
    setTodoList([...todoList])
  }

  return (
    <>
      <h2>TODO一覧</h2>
      {todoList.map((todo, i) => (
        <Fragment key={i}>
          <Todo name={todo.name} dueDate={todo.dueDate} />
          <button onClick={() => deleteTodo(i)}>削除</button>
        </Fragment>
      ))}
      <TodoForm createTodo={createTodo} />
    </>
  )
}
