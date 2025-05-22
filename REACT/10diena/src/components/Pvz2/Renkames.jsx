import React from "react";
import ProgKalba from "./ProgKalba";

const Renkames = () => {
  const [kalba, setKalba] = React.useState("");
  const gaunamInfoFn = (reiksme) => {
    setKalba(reiksme);
  };
  const tinmkrinam = (kalba) => {
    if (kalba === "JavaScript") {
      return "JavaScript yra puiki kalba!";
    } else if (kalba === "Python") {
      return "Python yra labai populiari kalba!";
    } else if (kalba === "Java") {
      return "Java yra labai galinga kalba!";
    } else {
      return "";
    }
  };
  return (
    <div>
      <h2>Renkames programavimo kalba</h2>
      <ProgKalba grazinamReiksme={gaunamInfoFn} />
      {kalba.length > 0 && (
        <>
          <p>Pasirinktya: {kalba}</p>
          <p>{tinmkrinam(kalba)}</p>
        </>
      )}
    </div>
  );
};

export default Renkames;
