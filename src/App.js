import './App.css';

const App = () => {

  // const name = "Lewis";
  // const isNameShowing = true;

  const Person = (props) => {
    return (
      <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
      </>
    )
  }

  return (
    <div className="App">
      <Person name={"Lewis"} lastName={"Broadhurst"} age={27} />
      <Person name={"Nathan"} />
      <Person name={"Sharon"} />
    </div>
  );
}

export default App;
