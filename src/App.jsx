import React from 'react'

export const App = () => {
  const numberList = [1, 2, 3]
  return numberList.map((num, i) => <Number key={i} num={num} />)
}

const Number = (props) => {
  // props.num += 1 // NG
  const changedNum = props.num + 1
  return <div>{changedNum}</div>
}
