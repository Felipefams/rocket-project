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
import { Crew } from './interfaces/crew.ts'
import { Launch } from './interfaces/launch.ts'
import { Rocket } from './interfaces/rocket.ts'

const rocketObj: Rocket[] = [
  {
    name: "Rocket",
    id: 1
  },
  {
    name: "Rocket2",
    id: 2
  }
]
const launchObj: Launch[] = [
  {
    launchCode: 1200,
    date: "2021-01-01",
    success: true,
    rocket: 1,
    crew: 2,
    id: 13
  },
  {
    launchCode: 1200,
    date: "2021-01-01",
    success: true,
    rocket: 1,
    crew: 2,
    id: 13
  }
]
const crewObj: Crew[] = [
  {
    name: "Crew 1",
    crewman: [1, 3, 4],
    id: 2
  },
  {
    name: "appollo iv",
    crewman: [1, 2],
    id: 14
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'launchs',
        element: <LaunchComponent object={launchObj} />,
      },
      {
        path: 'crewman',
        element: <CrewmanComponent object={[{ id: 1, name: "teste", patent: "uwu" }]} />,
      },
      {
        path: 'rockets',
        element: <RocketComponent object={rocketObj} />,
      },
      {
        path: 'crews',
        element: <CrewComponent object={crewObj} />,
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
