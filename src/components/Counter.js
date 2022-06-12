import { useState, useEffect } from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0);

    useEffect( () => {
      console.log("You've changed the counter to " + counter);
    }, [counter]);

  return (
    <>

      <button onClick={() => {setCounter(counter.valueOf() - 1)}}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => {setCounter(counter.valueOf() + 1)}}>+</button>

    </>
  )
}

export default Counter