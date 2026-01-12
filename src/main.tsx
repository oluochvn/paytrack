import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './paytrack'
import Login from './Components/user/login'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Signup from './Components/user/signup'
import Dashboard from './Components/Dashboard/dashboard'

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  errorElement: <div>Page not found</div>
},{
  path:'/login',
  element: <Login/>
},{
  path:'/signup',
  element: <Signup/>
},{
  path: '/dashboard',
  element: <Dashboard/>
}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
