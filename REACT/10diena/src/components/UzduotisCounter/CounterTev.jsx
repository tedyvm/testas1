import React from "react";
import CounterMygtukai from "./counterMygtukai";

const CounterTev = () => {
    const [counter, setCounter] = React.useState(0);
    const gaunamSkaiciu = (skaicius) => {
        setCounter(counter + skaicius);
    };
  return (
    <div>
      <h2>CounterTev</h2>
          <p>{counter}</p>
          <CounterMygtukai getData={gaunamSkaiciu} />
    </div>
  );
};

export default CounterTev;
