import { useState } from 'react';

import './stylesheets/App.css';
import Person from './components/Person.js';

const App = () => {

  // const name = "Lewis";
  // const isNameShowing = true;

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Person name={"Lewis"} lastName={"Broadhurst"} age={27} />
      <Person name={"Nathan"} />
      <Person name={"Sharon"} />

      <button onClick={() => {setCounter(counter.valueOf() - 1)}}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => {setCounter(counter.valueOf() + 1)}}>+</button>
    </div>
  );
}

export default App;
