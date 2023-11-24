import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";


const Main = () => {
  // Determine if the current route is the home page

  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;