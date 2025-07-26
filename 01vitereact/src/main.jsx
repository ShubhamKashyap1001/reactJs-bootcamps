import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Children } from 'react'
import React from 'react'

function MyApp() {
  return (
    <h1>Chai Aur React</h1>
  )
}

/*
const reactElement = {
  type : 'a',
  props : {
    href : "http://Google.com",
    target : "_blank",
  },
  Children : 'Click me to visit Google',
}
*/

const anotherElement = (
  <a href ="http://Google.com" target = "_blank">Visit Google</a>
)

const anotherUser = "Chai aur code";
const reactElement = React.createElement(
  'a',
  {href : 'http://Google.com', target : '_blank'},
  'Click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    //<App />
    //<MyApp />
    //reactElement   ->  not perform because this is created by own object
    //anotherElement
    reactElement

)
