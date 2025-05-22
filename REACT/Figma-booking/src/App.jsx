import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import About from "./components/About";
import Book from "./components/Book";

import { createBrowserRouter, NavLink, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [, { index: true, element: <Home /> }, { path: "/about", element: <About /> }, { path: "/book", element: <Book /> }],
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
