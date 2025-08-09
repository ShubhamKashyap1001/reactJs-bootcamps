import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"Shubham",
    age: 21,
  }

  return (
    <>
      <h1 className='bg-amber-300 text-black p-4 rounded-2xl m-6' >Tailwind CSS</h1>
       <Card username="Shubham " btnText ="Watch Now" />
       <Card username="Lucky" />
    </>
  )
}

export default App
