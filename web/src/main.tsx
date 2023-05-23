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
    rocket: [],
    crew: [],
    id: 13
  },
  {
    launchCode: 1200,
    date: "2021-01-01",
    success: true,
    rocket: [],
    crew: [],
    id: 13
  }
]
const crewObj: Crew[] = [
  {
    "name": "Crew 1",
    "crewman": [],
    "id": 2
  }
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'launchs',
        element: <LaunchComponent object={[{}]} />,
      },
      {
        path: 'crewman',
        element: <CrewmanComponent object={[{id: 1, name:"teste", patent: "uwu"}]} />,
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
