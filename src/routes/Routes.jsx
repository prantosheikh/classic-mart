import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SingUp/SingUp";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/signup",
      element: <SignUp/>
    }
  ]);