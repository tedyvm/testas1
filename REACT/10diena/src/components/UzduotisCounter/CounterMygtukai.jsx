import React from "react";

const CounterMygtukai = (props) => {
  const pridedam = (skaicius) => {
    props.getData(skaicius);
  };
  return (
    <>
      <div>CounterMygtukai</div>
      <button onClick={() => pridedam(1)}>+1</button>
      <button onClick={() => pridedam(2)}>+2</button>
      <button onClick={() => pridedam(3)}>+3</button>
    </>
  );
};

export default CounterMygtukai;
