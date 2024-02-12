import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from './Components/Layouts/Layout'
import Contact from './Pages/Contact'
import Help from './Pages/Help'
import ScrollToAbout from './Components/ScrolltoParticular/ScrollToAbout';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children: [
    {
      path: "/",
      element:<App/>,
    },
    {
      path:"/about",
      element:<ScrollToAbout/>,
    },
    {
      path:"/help",
      element:<Help/>,
    },
    {
      path:"/contact",
      element:<Contact/>,
    }
   ],
 },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
