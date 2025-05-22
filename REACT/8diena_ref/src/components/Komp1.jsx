import { useRef, useState } from "react";

const Komp1 = () => {
    const [zodis, setZodis] = useState("");
    const salisInputRef = useRef();
    const fukciuja = (event) => {
        setZodis(salisInputRef.current.value);
    }
    return (
    <div>
      <h2>Megstamiausia salis</h2>
      <div>
        <label htmlFor="salis">Iveskite sali</label>
        <input type="text" id="salis" ref={salisInputRef}/>
        <button onClick={funkcija}>Ivesti</button>
      </div>
            <p>Jus ivedete: { zodis}</p>
    </div>
  );
};

export default Komp1;
