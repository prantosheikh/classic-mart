import { createBrowserRouter } from "react-router-dom";
import Hero from "../pages/Home/Hero/Hero";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Hero/>
    },
  ]);