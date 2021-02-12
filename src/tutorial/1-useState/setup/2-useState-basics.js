import React, { useState } from 'react';
//use
// component name must be uppercase
// must be in the fxn/comp body
// cannot call conditionally

const UseStateBasics = () => {
  const [text, setText] = useState('random')

  const handleClick = () => {
    if (text === 'random') {
      setText('HELLO')
    } else {
      setText('RANDOM TITLE')
    }
  }
  return <> 
    <h1>{text}</h1>
    <button className="btn" onClick={handleClick}>
      Change title
    </button>
  </>
};

export default UseStateBasics;
