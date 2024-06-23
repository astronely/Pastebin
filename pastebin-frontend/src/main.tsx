import React from 'react'
import ReactDOM from 'react-dom/client'
// import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />,
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/*<App />*/}
      <RouterProvider router={router} />
      {/*<Home />*/}
      {/*<Login />*/}
  </React.StrictMode>,
)
