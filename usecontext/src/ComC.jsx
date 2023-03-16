import React, { useContext } from 'react';
import { fName, lName } from './App';

const ComC = () => {
    const firstName = useContext(fName);
    const lastName = useContext(lName);
    
  return (
    <>
        <h1>My Name is {firstName} {lastName}</h1>
    </>
  )
}

export default ComC