import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copyClicked, setCopyClicked] = useState(false) // NEW: hover effect on copy

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "1234567890"
    if (charAllowed) str += "!@#$%^&*(){}_+=[]"

    //It generates a random password of the desired length using characters from the string str
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0, 8)

    // Show hover effect for a few seconds
    setCopyClicked(true)
    setTimeout(() => setCopyClicked(false), 1000)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, numberAllowed, setPassword])

  return (
    <div className="w-full min-h-screen flex items-center justify-center" style={{ backgroundColor: 'black' }}>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 text-red-600 bg-gray-600'>
        <h1 className='text-center text-black text-xl font-bold mb-4'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white'
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className={`outline-none text-white px-3 py-1 ${copyClicked ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-500'}`}
          >
            {copyClicked ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className='flex flex-col gap-4 text-sm'>
          <div className='flex items-center gap-x-2'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label className='text-black'>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-2'>
            <input
              type='checkbox'
              id="numberInput"
              checked={numberAllowed}     //checked={numberAllowed} binds the checkbox's checked state to the React state variable numberAllowed
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <label htmlFor="numberInput" className='text-black'>Include Numbers</label>
          </div>

          <div className='flex items-center gap-x-2'>
            <input
              type='checkbox'
              id="charInput"
              checked={charAllowed}
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label htmlFor="charInput" className='text-black'>Include Symbols</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
