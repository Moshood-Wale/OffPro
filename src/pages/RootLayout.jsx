import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/footer";

function RootLayout() {
  return (
    <div className="">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
