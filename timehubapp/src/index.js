import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Main } from './Pages/Main';
import { Login } from './Pages/Login';
import ErrorPage from './Pages/ErrorPage';
import { Redirect } from './Pages/Redirect';
import './App.css';
import { Users } from './Pages/Users';
import { User } from './Pages/User';
import NewUser from './Pages/NewUser';





const router = createBrowserRouter([
  {
    //What to do here?
    path:"/",
    element: <Login />,
    errorElement:<ErrorPage/>
  },{
    path: "/login",
    element: <Login />,
    errorElement:<ErrorPage/>
  },
  {
    path:"/main",
    element:<Main/>,
    errorElement:<ErrorPage/>,
    ///Here pages for the MainPage
    children:[
      {
        path:"/main/users",
        element:<Users></Users>
      },{
        path:"/main/users/new",
        element:<NewUser></NewUser>
      },{
        path:"/main/user/:id",
        element:<User></User>
      }
    ]
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
