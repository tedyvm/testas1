import React from "react";

const ProgKalba = (props) => {
  const issiunciam = (e) => {
    props.grazinamReiksme(e.target.innerText);
  };
  return (
    <>
      <div>ProgKalba</div>
      <button onClick={issiunciam}>JavaScript</button>
      <button onClick={issiunciam}>Python</button>
      <button onClick={issiunciam}>Java</button>
    </>
  );
};

export default ProgKalba;
