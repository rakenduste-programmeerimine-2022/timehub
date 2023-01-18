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
import Users from './Components/Users';
import { User } from './Components/User';
import NewUser from './Components/NewUser';



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
        path:"/main/user/:id",
        element:<User></User>
      },{
        path:"main/user/new",
        element:<NewUser/>
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
