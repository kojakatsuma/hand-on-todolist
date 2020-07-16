import React from 'react'

export const Todo = (props) => {
  const { name, dueDate } = props
  const expired = Date.now() > dueDate.getTime()
  return (
    <>
      <input type="checkbox" id={name} />
      <label htmlFor={name}>
        <span style={expired ? { textDecorationLine: 'line-through' } : null}>
          {name}
        </span>
        {dueDate.toLocaleString()}
      </label>
    </>
  )
}
