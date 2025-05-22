import { useState } from "react"

const Komp2 = () => {
  const [zodziai, setZodziai] = useState(["", ""]);

  return (
    <div>
      <h2>Ilgesnis žodis</h2>
      <div>
        <label htmlFor="pirmasZodis">Pirmas žodis:</label>
        <input
          type="text"
          id="pirmasZodis"
          onInput={(e) =>
            setZodziai([e.target.value, zodziai[1]])
          }
        />
      </div>
      <div>
        <label htmlFor="antrasZodis">Antras žodis:</label>
        <input
          type="text"
          id="antrasZodis"
          onInput={(e) =>
            setZodziai([zodziai[0], e.target.value])
          }
        />
      </div>
      <p>
        <strong>
          Ilgesnis žodis:{" "}
          {zodziai[0].length > zodziai[1].length
            ? zodziai[0]
            : zodziai[1]}
        </strong>
      </p>
    </div>
  );
};

export default Komp2;
