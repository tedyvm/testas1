import { useState } from "react";
import "./App.css";
import Dekojame from "./components/dekojame/Dekojame";
import Header from "./components/header/Header";
import UzsakymoForma from "./components/uzsakymo-forma/UzsakymoForma";

function App() {
  const [rodytiDekojame, setRodytiDekojame] = useState(false);

  return (
    <>
      <Header />
      <div className="container configurator">
        {!rodytiDekojame ? (
          <UzsakymoForma perkam={() => setRodytiDekojame(true)} />
        ) : (
          <Dekojame />
        )}
      </div>
    </>
  );
}

export default App;
