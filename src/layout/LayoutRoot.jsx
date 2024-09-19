import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/mainComponent/Navbar";
import Footer from "../components/mainComponent/Footer";

const LayoutRoot = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default LayoutRoot;
