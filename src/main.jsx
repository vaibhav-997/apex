import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import About from './pages/About.jsx'
import Support from './pages/Support.jsx'
import OurCulture from './pages/OurCulture.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

const router =  createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:"/career",
    element:<About />
  },{
    path:"/our-culture",
    element:<OurCulture />
  },{
    path:"/support",
    element:<Support />
  },{
    path:"/login",
    element:<Login />
  },
  {
    path:"/register",
    element:<Register />
  },
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
       <App />
       
    </RouterProvider>
  </StrictMode>,
)
