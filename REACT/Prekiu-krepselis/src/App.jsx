import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Preke from "./components/Preke";

function App() {
  const prekesIsUzsakymo = [
    { name: "Sim kortelė", price: 2.0, img: "./src/assets/sim.png", kiekis: 2 },
    { name: "Telefonas", price: 1200.0, img: "./src/assets/phone.png", kiekis: 5 },
    { name: "SD kortelė (128GB)", price: 35.0, img: "./src/assets/sd.jpg", kiekis: 3 },
  ];
  const [prekes, setPrekes] = useState(prekesIsUzsakymo);
  const gaunamPrekes = (naujasKrepselis) => {
    setPrekes(naujasKrepselis);
  };
  return (
    <>
      <div className="container">
        <h1>{prekes.reduce((acc, preke) => acc + preke.price * preke.kiekis, 0)}</h1>
        <h1>Prekiu krepselis</h1>
        <div className="krepselis">
          <Header />
          <Preke siunciam={prekes} gaunam={gaunamPrekes} />
          <Footer siunciam={prekes} />
        </div>
      </div>
    </>
  );
}

export default App;
