import { useRef, useState } from "react";

const Komp5 = () => {
  const skaiciusRef = useRef(null);
  const [skaicius, setSkaicius] = useState(0);
  const priimti = () => {
    const skaicius = skaiciusRef.current.value;
    setSkaicius(skaicius);
    skaiciusRef.current.value = "";
  };
  const arTeigiamas = () => {
    if (skaicius > 0) {
      return "Skaicius teigiamas";
    } else if (skaicius < 0) {
      return "Skaicius neigiamas";
    } else {
      return "Skaicius nelygus nuliui";
    }
  };
  const arLyginis = () => {
    if (skaicius % 2 === 0) {
      return "Skaicius lyginis";
    } else {
      return "Skaicius nelyginis";
    }
  };
  return (
    <div>
      <h3>Skaicius</h3>
      <div>
        <label htmlFor="">Iveskite bet koki skaiciu: </label>
        <input type="number" ref={skaiciusRef} />
        <button onClick={priimti}>Priimti</button>
      </div>
      {skaicius.length > 0 && (
        <>
          <p>Ivestas skaicius {skaicius}</p>
          <p>{arTeigiamas()}</p>
          <p>{arLyginis()}</p>
        </>
      )}
    </div>
  );
};

export default Komp5;
