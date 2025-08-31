import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../commons/Navbar";
import Footer from "../commons/Footer";

export default function Layout() {
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