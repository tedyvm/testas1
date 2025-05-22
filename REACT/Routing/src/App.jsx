import "./App.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import Klaida from "./components/Klaida";
import Products from "./components/Products";
import MainLayout from "./components/MainLayout";
import { createBrowserRouter, NavLink, RouterProvider } from "react-router";
import AdminLayout from "./components/AdminLayout";
import Product from "./components/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      ,
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/products", element: <Products /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/contacts", element: <Contacts /> },
      { path: "*", element: <Klaida /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <Klaida /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
