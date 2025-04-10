import { useEffect } from "react";

const Navbar = ({ title }) => {
  useEffect(() => {
    document.title = title || "Numatytas pavadinimas";
  }, [title]);

  return (
    <div className="navbar">
      <h1>Navbar h1</h1>
      <ul>
        <li>
          <a href="#pradzia">Pradzia</a>
        </li>
        <li>
          <a href="#paslaugos">Paslaugos</a>
        </li>
        <li>
          <a href="#apieMus">Apie Mus</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
