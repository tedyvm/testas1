import React, { useState } from "react";
import SpalvuMygtukai from "./SpalvuMygtukai";

const Spalvos = () => {
    const [spalva, setSpalva] = useState("");
    const getSpalva = (spalva) => {
        setSpalva(spalva);
    };
  return (
    <div style={{ backgroundColor: spalva }}>
          <h2>Spalvos</h2>
          <p>Pasirinkta spalva: {spalva}</p>
          <SpalvuMygtukai getSpalva={getSpalva} />
    </div>
  );
};

export default Spalvos;
