import { useState } from 'react'
import Leaderboard from "./components/Leaderboard";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Leaderboard />
    </>
  )
}

export default App
