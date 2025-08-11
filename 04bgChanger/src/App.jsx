import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [color,setColor] = useState("lightblue");

  return (
    <>
      <div className = "w-full h-screen duration-200"
      style = {{backgroundColor : color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-1 shadow-lg inset-x-0 px-3'>
            <div className='flex flex-wrap bg-white px-3 py-2 gap-3 rounded-2xl shadow-lg'>
              <button
              onClick={() => setColor("red")}
              className='outline-none w-20 px-3 py-2 rounded-2xl text-white shadow-lg'
              style={{backgroundColor : "red"}}
              >Red
              </button>
              <button 
              onClick={() => setColor("green")}
              className='outline-none w-20 px-3 py-2 rounded-2xl text-white shadow-lg'
              style={{backgroundColor : "green"}}
              >Green
              </button>
              <button 
              onClick={() => setColor("blue")}
              className='outline-none w-20 px-3 py-2 rounded-2xl text-white shadow-lg'
              style={{backgroundColor : "blue"}}
              >blue
              </button>
              <button 
              onClick={() => setColor("lightpink")}
              className='outline-none w-20 px-3 py-2 rounded-2xl text-white shadow-lg'
              style={{backgroundColor : "lightpink"}}
              >lightpink
              </button>
              <button 
              onClick={() => setColor("orange")}
              className='outline-none w-20 px-3 py-2 rounded-2xl text-white shadow-lg'
              style={{backgroundColor : "orange"}}
              >orange
              </button>
              <button 
              onClick={() => setColor("lightgreen")}
              className='outline-none w-22 px-3 py-2 rounded-2xl text-white shadow-lg'
              style={{backgroundColor : "lightgreen"}}
              >lightgreen
              </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
