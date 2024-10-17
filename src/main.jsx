import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import PetsDashboard from './views/PetsDashboard.jsx'
import PetDetails from './views/PetDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PetsDashboard />,
  },
  {
    path: '/edit/:id',
    element: <PetDetails/>,
  },
  {
    path: '/add',
    element: <PetDetails />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
