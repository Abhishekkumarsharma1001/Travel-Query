import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Sec2 from './components/Sec2'
import Sec1 from './components/Sec1'
import Sec3 from './components/Sec3'
import Sec4 from './components/Sec4'
import Footer from './components/Footer'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Translate from './components/Translate'
import Cost from './components/Cost'
import TripPlanner from './components/TripPlanner'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:  <>
      <Navbar/>
      <Header/>
      <Sec1/>
      <Sec2/>
      <Sec3/>
      <Sec4/>
      <Footer/>
    </>
    }, {
      path: "/tripplanner",
      element: <><Navbar/>
      
      <br /><br /><TripPlanner/>
      
      </>
    },
    {
      path: "/translate",
      element: <><Navbar/><Translate/>
      
      </>
    },
    {
      path: "/cost",
      element: <><Navbar/><Cost/>
      
      </>
    }
  
  ])

  return (
   <RouterProvider router = {router}/>
  )
}

export default App
