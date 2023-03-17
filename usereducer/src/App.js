import React, { useReducer } from 'react'
import logo from './logo.svg';
import './App.css';

const initialState = 0;

const reducer = (state, action) => {
  if (action.type === "INCREMENT")
    return state + 1
  else if (action.type === "DECREMENT")
    return state - 1;
    else if (action.type === "INC5")
    return state + 5;
  console.log(state);
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <p>{ state }</p>

      <button onClick={() => dispatch({type: "INCREMENT"})}> Inc </button>
      <button onClick={() => dispatch({type: "DECREMENT"})}> Dec </button>
      <button onClick={() => dispatch({type: "INC5"})}> INC by 5 </button>
    </div>
  );
}

export default App;
