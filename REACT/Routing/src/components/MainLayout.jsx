import React from "react";
import { NavLink, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <h1>
        Header
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </h1>

      <Outlet />
      <h1>Footer</h1>
    </>
  );
};

export default MainLayout;
