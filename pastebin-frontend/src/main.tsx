import React from 'react'
import ReactDOM from 'react-dom/client'
// import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./pages/Home.tsx";
import SignUp from "./pages/SignUp.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <SignUp />
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
