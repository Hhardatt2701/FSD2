import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Spa from './components/Spa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Spa />
    </>
  )
}

export default App
