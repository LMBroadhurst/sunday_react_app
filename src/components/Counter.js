import { useState } from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0);

  return (
    <>

      <button onClick={() => {setCounter(counter.valueOf() - 1)}}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => {setCounter(counter.valueOf() + 1)}}>+</button>

    </>
  )
}

export default Counter