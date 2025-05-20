import {
  createBrowserRouter,

} from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AddTask from "../Pages/AddTask";
export const router = createBrowserRouter([
  {

    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home


      },
      {
        path: "/addtask",
        Component: AddTask
      },
    ]
  },

  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login
      },
      {
        path: "/auth/signUp",
        Component: SignUp
      },
    ]
  },
]);