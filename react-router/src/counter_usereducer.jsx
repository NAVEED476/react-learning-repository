import React from 'react'
import { useReducer } from 'react'

const initialvalue = 0;

const reducer = (state,action)=>{
    switch(action){
        case 1:
            return state+1;
        case 2:
            return state+2;
        case 3:
            return state+3;
        case 'Reset':
            return state*0;
        default:
            throw new Error ("Error")
    }
}




const Stopwatch = () => {
    const [ans,dispatch] = useReducer(reducer,initialvalue)

  return (
    <div className='App'>
        <h1>{ans}</h1>
        <button onClick={()=>dispatch(1)}>Add1</button> <br />
        <button onClick={()=>dispatch(2)}>Add2</button> <br />
        <button onClick={()=>dispatch(3)}>Add3</button> <br />
        <button onClick={() => dispatch('Reset')}>reset</button>
    </div>
  )
}

export default Stopwatch