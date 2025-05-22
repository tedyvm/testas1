import React from "react";
import Paketas from "./paketas/Paketas";
import Spalva from "./spalvos/Spalva";
import Variklis from "./variklis/Variklis";
import Salonas from "./salonas/Salonas";
import Priedai from "./priedai/Priedai";
import { useState } from "react";

const UzsakymoForma = (props) => {
  const [paketoKaina, setPaketoKaina] = useState(0);
  const [spalvosKaina, setSpalvosKaina] = useState(0);
  const [variklioKaina, setVariklioKaina] = useState(0);
  const [salonoKaina, setSalonoKaina] = useState(0);
  const [prieduKaina, setPrieduKaina] = useState(0);

  const rodytiSuma = () => {
    return (
      paketoKaina + spalvosKaina + variklioKaina + salonoKaina + prieduKaina
    );
  };

  const pirkti = () => {
    props.perkam();
  };

  return (
    <div>
      <section className="first">
        <div>
          <img src="./src/assets/masina.png" alt="" />
        </div>
        <div>
          <Paketas pasirinkimas={(a) => setPaketoKaina(a)} />
        </div>
      </section>
      <section className="second">
        <div>
          <Spalva pasirinkimas={(a) => setSpalvosKaina(a)} />
        </div>
        <div>
          <Variklis pasirinkimas={(a) => setVariklioKaina(a)} />
        </div>
      </section>
      <section className="third">
        <div>
          <Salonas pasirinkimas={(a) => setSalonoKaina(a)} />
        </div>
        <div>
          <Priedai pasirinkimas={(a) => setPrieduKaina(a)} />
        </div>
      </section>
      <hr />
      <div className="footer">
        <div>
          Galutinė kaina: <span>{rodytiSuma()} &euro;</span>
        </div>
        <div>
          <button type="button" onClick={pirkti}>
            Pirkti
          </button>
        </div>
      </div>
    </div>
  );
};

export default UzsakymoForma;
