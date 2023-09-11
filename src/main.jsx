import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'header',
        element:<Header />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
