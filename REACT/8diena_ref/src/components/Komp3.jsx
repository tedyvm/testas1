import { useRef, useState } from "react";

const Komp3 = () => {
  const inputRef = useRef();
  const [pazymiai, setPazymiai] = useState([]);
  const submitFn = (e) => {
    e.preventDefault();
    const pazymys = inputRef.current.value;
    if (pazymys > 0) {
      setPazymiai([...pazymiai, pazymys]);
      inputRef.current.value = "";
    }
  };
  const vidurkis = () => {
    const suma = pazymiai.reduce((acc, curr) => acc + Number(curr), 0);
    return (suma / pazymiai.length).toFixed(1);
  };
  const isvalyti = () => {
    setPazymiai([]);
    inputRef.current.value = "";
  };

  return (
    <div>
      <h2>Studento vidurkis</h2>
      <form onSubmit={submitFn}>
        <label htmlFor="">Iveskite pazymi</label>
        <input type="number" min={1} max={10} name="pazymys" ref={inputRef} />
        <button type="submit">Ivesti</button>
      </form>
      {pazymiai.length > 0 && (
        <>
          <div>
            <p>Ivesti pazymiai:</p>
            <p>{pazymiai.join(", ")}</p>
          </div>
          <div>
            <p>Vidurkis:</p>
            <p>{vidurkis()}</p>
          </div>
          <div>
            <button onClick={isvalyti}>Isvalyti pazymius</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Komp3;
