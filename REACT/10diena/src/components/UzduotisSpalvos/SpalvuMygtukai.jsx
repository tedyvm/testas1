import React from "react";

const SpalvuMygtukai = (props) => {
    const getSpalva = (spalva) => {
        props.getSpalva(spalva);
    }
  return (
    <div>
      <button onClick={() => getSpalva("red")}>Raudona</button>
      <button onClick={() => getSpalva("green")}>Žalia</button>
      <button onClick={() => getSpalva("blue")}>Mėlyna</button>
    </div>
  );
};

export default SpalvuMygtukai;
