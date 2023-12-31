import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Main/Dashboard";
import PopularMenu from "../Pages/Home/PopularMenu/PopularMenu";
import PopularInstructor from "../Pages/Home/PopularInstructor/PopularInstructor";

import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import PrivateRoute from "./PrivateRoute";
import MySelectedClass from "../Pages/Dashboard/MySelectedClass/MySelectedClass";
import AdminRoute from "./AdminRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Register/>
      },
      {
        path: '/popularClass',
        element: <PopularMenu/>
      },
      {
        path: '/instructors',
        element: <Instructors/>
      },
      {
        path: '/classes',
        element: <Classes/>
      },
      {
        path: '/popularInstructor',
        element: <PopularInstructor/>
      },
    ]
  },
  {
    path: "dashboard",
    element:<PrivateRoute><Dashboard/></PrivateRoute>,
    children:[
     
      {
        path:'addClass',
        element:<AddClass></AddClass>
      },
      {
        path:'manageClasses',
        element:<ManageClasses/>
      },
      {
        path:'mySelectedClass',
        element:<MySelectedClass/>
      },
      {
        path:'payment',
        element: <Payment></Payment>
      },
      {
        path: 'allUsers', 
        element: <AllUsers></AllUsers>
      },
      {
        path: 'myClasses', 
        element: <MyClasses/>
      },
    ]
  }
]);
