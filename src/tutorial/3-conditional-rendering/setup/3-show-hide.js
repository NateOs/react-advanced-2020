import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false)

  return <>
    <h2>show/hide</h2>
    <button className='btn' onClick={() => setShow(!show)}>Toggle</button>
    {show && <Item />}
  </>
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize) //cleanup function for useEffect
    }
  }, []) // the empty array arg for the depemdency ele works well for elements but not components, that's why the use of the cleanUp function

  return (
    <div style={{ marginTop: '2rem'}}>
      <h1>window</h1>
      <h2>size :{size} px</h2>
    </div>
  )
}

export default ShowHide;
