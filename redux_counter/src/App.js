import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux"

function App() {
  const counter = useSelector((state)=>state.counter);
  const dispatch = useDispatch();

  const increment = () =>{
    dispatch({type:"INC"})
  }

  const decrement = () =>{
    dispatch({type:"DEC"})
  }

  const addBy = () =>{
    dispatch({type:"ADD_BY",payload:10})
  }
  return (
    <div className="App">
      <h1>hello this is the counter app using redux</h1>
      <h1>{counter}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>AddBy</button>

    </div>
  );
}

export default App;
