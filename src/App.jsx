import React from 'react'

export const App = () => {
  const nameList = ['太郎', 'ハナコ', '二郎']
  return (
    <div>
      <span>exmple</span>
    </div>
  )
}

const Name = (props) => {
  const name = props.name
  return <div>{name}</div>
}

const TopHeader = () => {
  return <h1>Hello</h1>
}

const SecondHeader = () => {
  return <h2>World!!!</h2>
}
