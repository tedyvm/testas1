import { useState } from "react";

const Komp = () => {
  const [skaicius, setSkaicius] = useState(0);
  return (
    <div>
      <h2>Skaiciaus keitimas</h2>
      <button onClick={() => setSkaicius(skaicius+1)}>Diditni vienetu</button>
      <button onClick={() => setSkaicius(skaicius-1)}>Mazinti vienetu</button>
      <button onClick={() => setSkaicius(skaicius+5)}>Diditni penkiais</button>
      <button onClick={() => setSkaicius(skaicius-5)}>Mazinti penkiaias</button>
      <button onClick={() => setSkaicius(0)}>nunulinti</button>
      
      <p>reiksme: {skaicius}</p>
    </div>
  );
};

export default Komp;
