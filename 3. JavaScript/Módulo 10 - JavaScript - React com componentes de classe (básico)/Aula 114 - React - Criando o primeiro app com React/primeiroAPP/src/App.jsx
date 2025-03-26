import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  function handleClick () {
    setCount(count + 1)
  } 

  return (
    <>
      <h1>Hello world!!</h1>
      <button onClick={handleClick}> Quantidade de cliques: {count} </button>
    </>
  )
}

export default App
