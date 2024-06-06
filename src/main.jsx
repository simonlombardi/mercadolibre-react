import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home';
import Carrito from './pages/Carrito'
import Error from './pages/404';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/carrito",
    element: <Carrito />
  },
  {
    path: "*",
    element: <Error />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
