import { useState } from "react"
import { useEffect } from "react"

const ItemCount = ({ stock, initial = 0, onAdd}) => {
  const [counter, setCounter] = useState(initial)

  useEffect ( () => {
    setCounter(initial) }, [initial])

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1)
    }
  }

  const decrement = () => {
    if (counter > initial) {
      setCounter(counter - 1)
    }
  }

  const disableAddButton = () => {

    let disabled = false

    if ( stock == 0 ) {
      disabled = true
  } 

  return disabled
}

  return (
    <div className="btn-group p-2">
      <button className="btn btn-outline-dark" onClick={decrement}>-</button>
      <button className="btn" disabled>{counter}</button>
      <button className="btn btn-outline-dark" onClick={increment}>+</button>
      <button className="btn btn-outline-dark" onClick={() => onAdd(counter)} disabled = {disableAddButton()}>Add to cart!</button>
    </div>
  )
}

export default ItemCount