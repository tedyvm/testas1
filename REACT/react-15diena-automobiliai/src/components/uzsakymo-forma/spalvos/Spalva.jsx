import React, { useState } from "react";
import "./Spalva.css";

const Spalva = (props) => {
  const spalvos = [
    {
      fonas: "#000000",
      pavadinimas: "Juoda",
      kaina: 0,
    },
    {
      fonas: "#DC1313",
      pavadinimas: "Raudona",
      kaina: 100,
    },
    {
      fonas: "#D9D9D9",
      pavadinimas: "Pilka",
      kaina: 0,
    },
    {
      fonas: "#5A6B3A",
      pavadinimas: "Zalia",
      kaina: 300,
    },
    {
      border: "1px solid rgba(0,0,0,0.05)",
      fonas: "#FDFDFD",
      pavadinimas: "Balta",
      kaina: 0,
    },
    {
      fonas: "#124099",
      pavadinimas: "Melyna",
      kaina: 200,
    },
  ];
  const [pasirinktas, setSpalva] = useState(null);

  const pasirinkti = (variantas) => {
    props.pasirinkimas(spalvos[variantas].kaina);
    setSpalva(variantas);
  };

  return (
    <div className="card">
      <h2>Spalva.</h2>
      <div className="options colors">
        {spalvos.map((spalva, index) => (
          <div
            key={index}
            className={`option ${pasirinktas === index ? "selected" : ""}`}
            onClick={() => pasirinkti(index)}
          >
            <div
              className="color"
              style={{
                backgroundColor: spalva.fonas,
                border: spalva.border ? spalva.border : "none",
              }}
            ></div>
            <div className="info">
              <div className="title">{spalva.pavadinimas}</div>
              <div className="price">+{spalva.kaina} &euro;</div>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0.601685C8.07164 0.601685 6.18657 1.17351 4.58319 2.24486C2.97982 3.3162 1.73013 4.83894 0.992179 6.62052C0.254224 8.4021 0.061142 10.3625 0.437348 12.2538C0.813554 14.1451 1.74215 15.8824 3.10571 17.246C4.46927 18.6095 6.20656 19.5381 8.09787 19.9143C9.98919 20.2905 11.9496 20.0975 13.7312 19.3595C15.5127 18.6216 17.0355 17.3719 18.1068 15.7685C19.1782 14.1651 19.75 12.2801 19.75 10.3517C19.7473 7.76666 18.7192 5.2883 16.8913 3.46041C15.0634 1.63252 12.585 0.604414 10 0.601685ZM14.2806 8.63231L9.03063 13.8823C8.96097 13.952 8.87826 14.0074 8.78721 14.0451C8.69616 14.0828 8.59857 14.1023 8.5 14.1023C8.40144 14.1023 8.30385 14.0828 8.2128 14.0451C8.12175 14.0074 8.03903 13.952 7.96938 13.8823L5.71938 11.6323C5.57865 11.4916 5.49959 11.3007 5.49959 11.1017C5.49959 10.9027 5.57865 10.7118 5.71938 10.5711C5.86011 10.4303 6.05098 10.3513 6.25 10.3513C6.44903 10.3513 6.6399 10.4303 6.78063 10.5711L8.5 12.2914L13.2194 7.57106C13.2891 7.50138 13.3718 7.4461 13.4628 7.40839C13.5539 7.37068 13.6515 7.35127 13.75 7.35127C13.8485 7.35127 13.9461 7.37068 14.0372 7.40839C14.1282 7.4461 14.2109 7.50138 14.2806 7.57106C14.3503 7.64074 14.4056 7.72347 14.4433 7.81451C14.481 7.90556 14.5004 8.00314 14.5004 8.10168C14.5004 8.20023 14.481 8.29781 14.4433 8.38886C14.4056 8.4799 14.3503 8.56263 14.2806 8.63231Z"
                  fill="#189AF8"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spalva;
