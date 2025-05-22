import { useState } from "react";
import "./App.css";
import Konverteris from "./components/Konverteris";

function App() {
  const [data, setData] = useState("");
  const getData = (rData) => {
    setData(rData);
    console.log(rData);
  };
  return (
    <>
      <div className="container">
        <div className="left"></div>
        <div className="right">
          <Konverteris getData={getData} />
          {data && (
            <h2>
              {data.amount} {data.fromCurrency} yra {data.convertedAmount} {data.toCurrency}
            </h2>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
