import { useState } from "react";

const Komp1 = () => {
 
    const [zodis, setZodis] = useState('');

    return (
    <div>
      <h2>Zodziai</h2>
          <label htmlFor="zodis">Zodis: </label>
            <input type="text" id="zodis" onInput={(e) => setZodis(e.target.value)}/>
            
            <p>ivestas tekstas: {zodis}</p>
            <p>simboliu kiekis: {zodis.length}</p>
      </div>
  );
};

export default Komp1;
