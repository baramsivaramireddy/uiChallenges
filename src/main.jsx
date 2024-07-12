import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DayOnePage from './pages/day1.jsx';
import DayTwoPage from './pages/day2.jsx';
import DayThreePage from './pages/day3.jsx'
import HomePage from './pages/Homepage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/day1",
    element: <DayOnePage />,
  },
  {
    path: "/day2",
    element: <DayTwoPage />,
  },
  {
    path: "/day3",
    element: <DayThreePage />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <RouterProvider router={router} />

  </React.StrictMode>,
)
