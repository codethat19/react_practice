// import logo from './logo.svg';
import './App.css';
import ComA from './ComA';
import React, { createContext } from 'react';

const fName = createContext();
const lName = createContext();

function App() {
  return (
    <>
      <fName.Provider value={"Tech"}>
        <lName.Provider value={"Tunnel"}>
          <ComA />
        </lName.Provider> 
      </fName.Provider>  
    </>
  );
}

export default App;
export { fName, lName };