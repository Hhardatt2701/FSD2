import { useState } from 'react'

import './App.css'
import SinglePageApp from './components/Spa'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SinglePageApp /> 
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
