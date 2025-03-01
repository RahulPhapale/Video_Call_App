import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import React from 'react'
import VideoPage from './components/VideoPage'
import HomePage from './components/HomePage'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element :<HomePage/>
    },
    {
      path: "/room/:id",
      element:<VideoPage/>
    }
  ])

  return (
    <div className='App'>
  <RouterProvider 
              router={router}
  />
      
    </div>
  )
}

export default App
