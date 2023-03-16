import React from 'react';
import { fName, lName } from './App';

const ComC = () => {
  return (
    <fName.Consumer>
        {
            (firstName) => {
                return (
                    <lName.Consumer>
                    {
                        (lastName) => {
                            return <h1>My Name is {firstName} {lastName}</h1>
                        }
                    }
                    </lName.Consumer>
                    )
            }
        }
    </fName.Consumer>
  )
}

export default ComC