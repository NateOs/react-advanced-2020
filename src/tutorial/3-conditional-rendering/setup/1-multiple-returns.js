import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [isLoading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user,setUser] = useState('default user')

  //fetching the userData, the dependency arg on useEffect will prevent an infinite loop of requests and rerender
useEffect(() => {
  fetch(url)
  .then((resp) => {
    if (resp.status >= 200 && resp.status <= 299) {
      return resp.json()
    } else {
      setLoading(false)
      setIsError(true)
      throw new Error(resp.statusText)
    }
  })
  .then((user) => {
    const { login } = user
    setUser(login)
    setLoading(false)
  })
  .catch((error) => console.log(error))
}, [])

  if(isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    )
  }

  return <h2>{user}</h2>
};

export default MultipleReturns;
