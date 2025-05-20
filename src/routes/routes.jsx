import {
  createBrowserRouter,

} from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AddTask from "../Pages/AddTask";
import JobsDetails from "../Components/JobsDetails";
export const router = createBrowserRouter([
  {

    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        loader:()=>fetch('http://localhost:3000/jobs/recent'),
        Component: Home

      },
      {
        path: "addtask",
        Component: AddTask
      },
      {
        path:"jobs/:id",
        loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`),
        Component:JobsDetails
      }
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