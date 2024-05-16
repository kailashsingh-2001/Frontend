import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [count, setCount] = useState(0);
  function  incerment(){
    setCount(count++);

  }
  function decrement(){
    setCount(count--);
  }

  return (

    <>
    <div>
      <button onClick={incerment}>
        +
      </button>
      <span>{count}</span>
    <button onClick={decrement}>-</button>
    </div>
      </>
  )
}

export default App
