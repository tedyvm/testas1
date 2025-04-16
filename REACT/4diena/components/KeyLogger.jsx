import { useState } from "react";

const KeyLogger = () => {
  const [atsakymas, setAtsakymas] = useState("");

  return (
    <div>
      <h2>KeyLogger</h2>
      <input
        type="text"
        onChange={(e) => setAtsakymas(e.target.value)}
        value={atsakymas}
      />
      <div>{atsakymas}</div>
      <button onClick={() => setAtsakymas("")}>Išvalyti</button>
    </div>
  );
};

export default KeyLogger;
