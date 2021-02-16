import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)


  const adder = () => { 
    setValue(value + 1)
  }

  const substracter = () => {
    setValue(value - 1)
  }

  return (
    <> 
      <section style={{ margin: '4rem 0'}}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={adder}>Add</button>
        <button className='btn' onClick={() => setValue(0)}>Reset</button>
        <button className='btn' onClick={substracter}>Minus</button>
      </section>
    </>
  )
};

export default UseStateCounter;
