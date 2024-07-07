import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen.tsx'
import LoginScreen from './screens/LoginScreen.tsx'
import RegisterScreen from './screens/RegisterScreen.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route index={true} path="/login" element={<LoginScreen />} />
      <Route index={true} path="/register" element={<RegisterScreen />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
