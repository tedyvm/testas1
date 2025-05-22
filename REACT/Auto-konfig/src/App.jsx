import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Paketas from "./components/Paketas";
import Suma from "./components/Suma";
import Variklis from "./components/Variklis";
import Priedai from "./components/Priedai";
import Salonas from "./components/Salonas";
import Spalvos from "./components/Spalvos";
import Padeka from "./components/Padeka";

function App() {
  const paketas = [
    {
      name: "Pagrindinis paketas",
      price: 18000,
    },
    {
      name: "Bazinis",
      price: 20000,
    },
    {
      name: "Pilnas",
      price: 25000,
    },
  ];
  const priedai = [
    {
      name: "Stoglangis",
      price: 200,
    },
    {
      name: "Parktronikai",
      price: 300,
    },
    {
      name: "Kamera",
      price: 250,
    },
  ];
  const variklis = [
    {
      name: "Benzinas",
      price: 0,
    },
    {
      name: "Dyzelinas",
      price: 2000,
    },
    {
      name: "Elektra",
      price: 5000,
    },
  ];
  const salonas = [
    {
      name: "Medziaginis",
      price: 0,
    },
    {
      name: "Odinis",
      price: 200,
    },
  ];
  const spalva = [
    {
      kodas: "#000000",
      name: "Juoda",
      price: 0,
    },
    {
      kodas: "#D9D9D9",
      name: "Pilka",
      price: 0,
    },
    {
      kodas: "#FDFDFD",
      name: "Balta",
      price: 0,
    },
    {
      kodas: "#DC1313",
      name: "Raudona",
      price: 100,
    },
    {
      kodas: "#5A6B3A",
      name: "Zalia",
      price: 300,
    },
    {
      kodas: "#124099",
      name: "Melyna",
      price: 200,
    },
  ];
  const [paketoKaina, setPaketoKaina] = useState(0);
  const [variklioKaina, setVariklioKaina] = useState(0);
  const [priedoKaina, setPriedoKaina] = useState(0);
  const [salonoKaina, setSalonoKaina] = useState(0);
  const [spalvosKaina, setSpalvosKaina] = useState(0);
  const [pirkimas, setPirkimas] = useState(false);
  const pasirinktasPaketas = (paketoKaina) => {
    setPaketoKaina(paketoKaina);
  };
  const pasirinktasVariklis = (variklioKaina) => {
    setVariklioKaina(variklioKaina);
  };
  const pasirinktasPriedas = (priedoKaina) => {
    setPriedoKaina(priedoKaina);
  };
  const pasirinktasSalonas = (salonoKaina) => {
    setSalonoKaina(salonoKaina);
  };
  const pasirinktaSpalva = (spalvosKaina) => {
    setSpalvosKaina(spalvosKaina);
  };

  const sumaFn = () => {
    return paketoKaina + variklioKaina + priedoKaina + salonoKaina + spalvosKaina;
  };
  const pirkti = () => {
    setPirkimas(true);
  };

  return (
    <>
      <Header />
      <div className="container">
        {pirkimas ? (
          <Padeka data={sumaFn()} />
        ) : (
          <>
            <div className="config">
              <img src="./src/assets/auto.png" alt="" />
              <div className="paketai">
                <Paketas data={paketas} dataReturn={pasirinktasPaketas} />
              </div>
            </div>
            <div className="config">
              <div className="paketai spalvosd">
                <Spalvos data={spalva} dataReturn={pasirinktaSpalva} />
              </div>
              <div className="paketai salonas">
                <Salonas data={salonas} dataReturn={pasirinktasSalonas} />
              </div>
            </div>
            <div className="config">
              <div className="paketai variklis">
                <Variklis data={variklis} dataReturn={pasirinktasVariklis} />
              </div>
              <div className="paketai priedai">
                <Priedai data={priedai} dataReturn={pasirinktasPriedas} />
              </div>
            </div>
            <hr />
            <div className="suma">
              <Suma data1={sumaFn()} dataReturn={pirkti} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
