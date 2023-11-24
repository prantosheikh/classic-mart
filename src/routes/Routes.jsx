import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AboutUs from "../pages/AboutUs/AboutUs";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SingUp/SingUp";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children : [

        {
          path: "/",
          element: <Home />,
        },
        
        {
          path: "/signup",
          element: <SignUp />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/about",
          element: <AboutUs/>
        },

      ]
    },
  ]);