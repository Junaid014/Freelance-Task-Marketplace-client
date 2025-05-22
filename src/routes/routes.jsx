import {
  createBrowserRouter,

} from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AddTask from "../Pages/AddTask";
import UpdateTask from "../Pages/UpdateTask";
import JobsDetails from "../Components/JobsDetails";
import BrowseTask from "../Pages/BrowseTask";
import MyPostedJobs from "../Pages/MyPostedJobs";
import PrivetRoute from "../Provider/PrivetRoute";
import ErrorElement from "../Pages/ErrorElement";
export const router = createBrowserRouter([
  {

    path: "/",
    Component: Root,
     errorElement:<ErrorElement/>,
    children: [
      {
        index: true,
        path: "/",
       
        loader:()=>fetch('http://localhost:3000/jobs/recent'),
        Component: Home

      },
      {
        
        path: "/browsejobs",
        loader:()=>fetch('http://localhost:3000/jobs'),
        Component: BrowseTask

      },
      {
        path:'updatetask/:id',
        loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`),
        Component:UpdateTask
      },
      {
        path: "addtask",
        element: <PrivetRoute>
          <AddTask/>
        </PrivetRoute>
      },
      {
        path: "mycart",
        element: <PrivetRoute>
          <MyPostedJobs></MyPostedJobs>
        </PrivetRoute>
      },
      {
        path:"jobs/:id",
        loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`),
        element:<PrivetRoute>
          <JobsDetails></JobsDetails>
        </PrivetRoute>
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