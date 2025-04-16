import { useState } from "react";

const Komp5 = () => {
    const [selected, setSelected] = useState("x");
    const paspaudimas = (e) => {
        setSelected(e.target.innerText);
    }
    return (
      <div>
          <h2>Labiausiai patiko</h2>
          <button onClick={paspaudimas}>HTML</button>
          <button onClick={paspaudimas}>CSS</button>
          <button onClick={paspaudimas}>Bootstrap</button>
          <button onClick={paspaudimas}>Javascript</button>
            <button onClick={(e) => setSelected(e.target.innerText)}>React</button>
          <p>Pasirinkta: {selected}</p>
    </div>
  )
}

export default Komp5