import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Komp1 from './components/Komp1'
import Komp2 from './components/Komp2'
import Komp3 from './components/Komp3'
import Komp from './components/Komp'
import Komp5 from './components/Komp5'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Komp1 />
      <Komp2 />
      <Komp3 />
      <Komp />
      <Komp5 />
    </>
  )
}

export default App
