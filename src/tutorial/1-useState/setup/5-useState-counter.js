import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)


  const adder = () => { 
    setValue(value + 1)
  }

  const substracter = () => {
    setValue(value - 1)
  }

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 2)
      setValue((prevState) => { // using the functional update form can resolve certain bugs, like the unrecognised clicks here
        return prevState + 1    // setValue works but the setTimeOut makes it work improperly
      })
    }, 2000)
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
      <section style={{ margin: '4rem 0'}}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>Increase later</button>
      </section>
    </>
  )
};

export default UseStateCounter;
