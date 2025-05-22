import React from "react";

const Mygtukas = (props) => {
  const paspaudusFn = (e) => {
    props.griztaReiksme(e.target.innerText);
  };
  return (
    <div>
      <button onClick={paspaudusFn}>{props.miestas}</button>
    </div>
  );
};

export default Mygtukas;
