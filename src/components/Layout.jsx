import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../commons/Navbar";
import Footer from "../commons/Footer";

const Layout = () => {
  const location = useLocation();

  const hideLayout = location.pathname === "/"; 

  return (
    <>
      {!hideLayout && <Navbar />}
      <Outlet /> 
      {!hideLayout && <Footer />}
    </>
  );
}

export default Layout;