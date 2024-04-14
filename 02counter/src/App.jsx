import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
  //let counter = 5

  const addValue = () => {
    //counter = counter + 1;
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    //console.log('click', counter)
  }

  const removeValue = () => {
    setCounter(counter - 1);
    //console.log('click', counter);
  }


  return (
    <>
      <h1>Counter React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value: {counter}</button>
      <br /><br />
      <button onClick={removeValue}>Remove Value: {counter}</button>
    </>
  )
}

export default App
