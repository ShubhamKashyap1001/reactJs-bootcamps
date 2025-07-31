import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  let [FinalAnswer, setFinalAnswer ] = useState(0)


  
  const addValue = () => {
    if(counter !== 20){
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter !== 0){
      setCounter(counter -1)
    }
  }


  const getFinalAnswerText = () => {
    if(counter === 20) return "Maximum Value Reached"
    if(counter === 0) return "Minimum value Reached"
    else return ""
  }

  return (
    <>
      <h1> Chai Aur React </h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick = {addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value { counter}</button><br />
      <input type="text" value = {getFinalAnswerText()} readOnly
      style={{ padding: "10px", width: "250px" , borderRadius: "5px "}}
      ></input>
    </>
    
  )
}

export default App
