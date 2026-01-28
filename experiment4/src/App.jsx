import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterLocalState from './CounterLocalState.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h5>exp-4 by harshit hardatt</h5>
        <CounterLocalState cno="C1" />
        <CounterLocalState cno="C2" />
        <CounterLocalState cno="C3" />
      </div>
    </>
  )
}

export default App
