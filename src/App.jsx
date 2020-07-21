import React from 'react'

export const App = () => {
  const nameList = ['太郎', 'ハナコ', '二郎']
  return (
    <div>
      {nameList.map((name) => (
        <div>{name}</div>
      ))}
    </div>
  )
}

const TopHeader = () => {
  return <h1>Hello</h1>
}

const SecondHeader = () => {
  return <h2>World!!!</h2>
}
