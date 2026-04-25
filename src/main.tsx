import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Template from './App.tsx'
import Homepage from './childpage/index.tsx'
import FriendlyLinksContent from './childpage/friendlylinks.tsx'

const router = createBrowserRouter([
  {
    "path": "/",
    "element": <Homepage />
  },
  {
    "path": "/friendlylinks",
    "element": <Template element={FriendlyLinksContent} />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
