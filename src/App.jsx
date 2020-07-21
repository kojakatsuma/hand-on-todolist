import React from 'react'

export const App = () => {
  const numberList = [1, 2, 3]
  return numberList.map((number, i) => <Number key={i} number={number} />)
}

const Number = (props) => {
  // props.number += 1 // NG
  const changedNum = props.number + 1
  return <div>{changedNum}</div>
}
