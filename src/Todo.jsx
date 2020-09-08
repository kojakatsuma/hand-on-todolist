import React from 'react'

export const Todo = (props) => {
  const { name, dueDate, checked, onChange } = props
  const expired = Date.now() > dueDate.getTime()
  return (
    <div style={expired ? { color: 'red' } : null}>
      <input
        checked={checked}
        type="checkbox"
        id={name}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={name}>
        <span style={checked ? { textDecorationLine: 'line-through' } : null}>
          {name} {dueDate.toLocaleString()}
        </span>
      </label>
    </div>
  )
}
