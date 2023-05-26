import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import "./assets/css/table.css"
import "./assets/css/footer.css"
import "./assets/css/navbar.css"
import "./assets/css/modal.css"
import "./assets/css/index.css"

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { CrewComponent, CrewmanComponent, LaunchComponent, RocketComponent } from './routes'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'launchs',
        element: <LaunchComponent />,
      },
      {
        path: 'crewman',
        element: <CrewmanComponent />,
      },
      {
        path: 'rockets',
        element: <RocketComponent/>,
      },
      {
        path: 'crews',
        element: <CrewComponent />,
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
