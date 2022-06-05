import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App1 = () => {
    const counter = useSelector((state)=>state.counter)
    const dispatch = useDispatch()


    const increment = () =>{
        dispatch({type:"ADD"})
    }
    const decrement = () =>{
        dispatch({type:"DEC"})
    }


    // payload function

    const addby = () =>{
        dispatch({type:"ADD_BY",payload:10})
    }
  return (
    <div>
        <h1>building counter application using react and redux</h1>
        <h2>{counter}</h2>

        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={addby}>Addby 10</button>
    </div>
  ) 
}

export default App1