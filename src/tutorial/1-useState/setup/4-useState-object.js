import React, { useState } from 'react';


const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 25,
    message:'random message'
  })

  // this useState implementation allows you to access certain parts of the object
  const [name, setName] = useState('Peter')
  const [age, setAge] = useState(30)
  const [message, setMessage] = useState('random message')


  const changeMessage = () => {
      // setPerson({...person, message: 'Hello World'})
      setMessage('hello world')
      setAge(23)
  }

  return (
    <>
      <h3>{age}</h3>
      <h3>{name}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>Change Message</button>
    </>
  )
};

export default UseStateObject;
