import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DayOnePage from './pages/day1.jsx';

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
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <RouterProvider router={router} />

  </React.StrictMode>,
)
