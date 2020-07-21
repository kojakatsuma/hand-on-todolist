import React, { useState } from 'react'

export const Todo = ({ name, dueDate }) => {
  const [checked, check] = useState(false)
  const isExpired = Date.now() > dueDate.getTime()
  return (
    <div style={isExpired ? { color: 'red' } : null}>
      <input type="checkbox" id={name} onChange={() => check(!checked)} />
      <label htmlFor={name}>
        <span style={checked ? { textDecorationLine: 'line-through' } : null}>
          {name} {dueDate.toLocaleString()}
        </span>
      </label>
    </div>
  )
}
