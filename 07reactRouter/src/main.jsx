import { StrictMode } from 'react'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/Contact/ContactUs.jsx'
import GitHub, { githubInfoLoader } from './components/GitHub/GitHub.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider ,Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import User from './components/User/User.jsx'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout/>,
//     children:[
//       {
//         path : "",
//         element : <Home/>
//       },
//       {
//         path : "about",
//         element : <About />
//       },
//       {
//         path : "contact",
//         element : <ContactUs />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>}>
      <Route path = '' element = {<Home/>} />
      <Route path = 'about' element = {<About/>} />
      <Route path = 'contact' element = {<ContactUs/>} />
      <Route path = 'user/:userId' element = {<User/>} />
      <Route 
      loader = {githubInfoLoader}
      path = '/github'
       element = {<GitHub/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
