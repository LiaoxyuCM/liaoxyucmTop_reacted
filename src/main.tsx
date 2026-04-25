import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Template from './App.tsx'
import Homepage from './childpage/index.tsx'
import FriendlyLinksContent from './childpage/friendlylinks.tsx'
import FourZeroFour from './childpage/404.tsx'

const router = createBrowserRouter([
  {
    "path": "/",
    "element": <Homepage />
  },
  {
    "path": "/friendlylinks",
    "element": <Template element={FriendlyLinksContent} />
  },
  {
    "path": "*",
    "element": <Template element={FourZeroFour} />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
