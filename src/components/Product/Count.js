import React, {useState, useEffect} from 'react';
import './Product.css'
import randomcolor from "randomcolor"

function Count() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("")

  function countUp() {
    setCount(prevCount => prevCount + 1)
  }
  function countDown() {
    setCount(prevCount => prevCount - 1)
  }
  function countDouble() {
    setCount(prevCount => prevCount * 2)
  }

  return (
    <div>
      <div className="counter">
        <h1>{count}</h1>
        <button onClick={countUp}>Count up!</button>
        <button onClick={countDown}>Count Down!</button>
        <button onClick={countDouble}>x2</button>
      </div>
    </div>
  )
}

export default Count;