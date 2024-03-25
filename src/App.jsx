import { useState } from 'react'
import './App.css'
import SplashPage from './Pages/SplashPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <SplashPage/>
    </>
  )
}

export default App
