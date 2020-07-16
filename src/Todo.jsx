import React, { useState } from 'react'

export const Todo = (props) => {
  const [isCheck, check] = useState(false)
  const { name, dueDate } = props
  const expired = Date.now() > dueDate.getTime()
  return (
    <div style={expired ? { color: 'red' } : null}>
      <input type="checkbox" id={name} onChange={(e) => check(e.target.checked)}/>
      <label htmlFor={name}>
        <span style={isCheck ? { textDecorationLine: 'line-through' } : null}>
          {name} {dueDate.toLocaleString()}
        </span>
      </label>
    </div>
  )
}
