import { useState } from "react";


const Komp1 = () => {
    const [skaicius, setSkaicius] = useState(0);
    const didinti = () => {
        setSkaicius(skaicius + 1);
    }
    const mazinti = () => {
        setSkaicius(skaicius - 1);
    }
  return (
    <div>
      <div>Counter</div>
          <button onClick={didinti}>Didinti</button>
          <button onClick={mazinti}>mazinti</button>
      <p>Dabar yra {skaicius}</p>
    </div>
  );
};

export default Komp1;
