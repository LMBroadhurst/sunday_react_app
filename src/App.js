import './stylesheets/App.css';
import Person from './components/Person.js';
import Counter from './components/Counter';

const App = () => {

  // const name = "Lewis";
  // const isNameShowing = true;

  return (
    <div className="App">

      <Person name={"Lewis"} lastName={"Broadhurst"} age={27} />
      <Person name={"Nathan"} />
      <Person name={"Sharon"} />

      <Counter />

    </div>
  );
}

export default App;
