import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null) //iniitialising useRef
  const divContainer = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(divContainer.current) //logging the value from node
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div ref={divContainer}>
          <input type='text'  />
          <button type='submit' ref={refContainer}>submit</button>
        </div>
      </form>
    </>
  )
};

export default UseRefBasics;
  