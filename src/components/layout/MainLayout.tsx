import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      {/* sidebar, navbar etc */}
      <Outlet />
    </>
  );
};

export default MainLayout;
