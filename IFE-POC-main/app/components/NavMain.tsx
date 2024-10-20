"use client";

import React from "react";
import { useState } from "react";
import SideNav from "./SideNav";
import AppNavbar from "./NavBar";

const NavMain = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <AppNavbar toggleSidebar={toggleSidebar} />
      <SideNav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default NavMain;
