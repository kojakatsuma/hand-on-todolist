import React, { useState } from 'react'

export const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>up</button>
      <button onClick={() => setCount(count - 1)}>down</button>
    </>
  )
}