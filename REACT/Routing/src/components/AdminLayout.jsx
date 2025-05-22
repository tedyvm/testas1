import React from "react";
import { NavLink, Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <>
      <h1>
        Admino layoutas
        <NavLink to="/">Home</NavLink>
      </h1>

      <Outlet />
      <h1>Footer</h1>
    </>
  );
};

export default AdminLayout;
