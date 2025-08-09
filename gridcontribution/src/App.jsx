import { useState } from 'react'
import ContributionGrid from "./components/ContributionGrid"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center  bg-black '>
        <ContributionGrid />
      </div>
    </>
  )
}

export default App
