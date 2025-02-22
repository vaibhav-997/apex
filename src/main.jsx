import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import About from './pages/About.jsx'
import Careers from './pages/OurCulture.jsx'
import Support from './pages/Support.jsx'
import OurCulture from './pages/OurCulture.jsx'

const router =  createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:"/about",
    element:<About />
  },{
    path:"/our-culture",
    element:<OurCulture />
  },{
    path:"/support",
    element:<Support />
  },
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
