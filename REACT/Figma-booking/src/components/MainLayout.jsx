import React from "react";
import { NavLink, Outlet } from "react-router";
import Header from "./Header";

const MainLayout = () => {
  return (
    <><Header />
      <h1>
        Header<NavLink to="/">Home</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/book">Bookings</NavLink>
      </h1>

      <Outlet />
      <h1>Footer</h1>
    </>
  );
};

export default MainLayout;
