import {
  createBrowserRouter,
  
} from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
export const router = createBrowserRouter([
  {
    
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
            path:"/",
            Component:Home


        }
    ]
  },
  {
      path:"/auth",
      Component:AuthLayout,
      children:[
        {
          path:"/auth/login",
          Component:Login
        },
        {
          path:"/auth/signUp",
          Component:SignUp
        },
      ]
    },
]);