import { useState } from "react";
import "./Preke.css";
import { useEffect } from "react";

const Preke = (props) => {
  const [prekes, setPrekes] = useState(props.siunciam);

  const prideti = (index) => {
    const naujosPrekes = [...prekes];
    naujosPrekes[index].kiekis += 1;
    setPrekes(naujosPrekes);
  };

  const atimti = (index) => {
    const naujosPrekes = [...prekes];
    if (naujosPrekes[index].kiekis > 1) {
      naujosPrekes[index].kiekis -= 1;
      setPrekes(naujosPrekes);
    }
  };
  const pakeistiRankiniuBudu = (index, value) => {
    const naujosPrekes = [...prekes];
    naujosPrekes[index].kiekis = Math.max(1, parseInt(value) || 1);
    setPrekes(naujosPrekes);
  };
  const istrinti = (index) => {
    const naujosPrekes = [...prekes];
    naujosPrekes.splice(index, 1);
    setPrekes(naujosPrekes);
  };
  useEffect(() => {
    props.gaunam(prekes);
  }, [prekes]);

  return (
    <div className="prekes">
      {prekes.map((preke, index) => (
        <div className="preke" key={index}>
          <div className="cell img">
            <img src={preke.img} alt={preke.name} />
          </div>
          <div className="cell name">{preke.name}</div>
          <div className="cell price">{preke.price} €</div>

          <div className="cell kiekis">
            <svg onClick={() => atimti(index)} className="minusas" width="38" height="46" viewBox="0 0 38 46">
              <path d="M38 0.5H10C4.47715 0.5 0 4.97715 0 10.5V35.5C0 41.0228 4.47715 45.5 10 45.5H38V0.5Z" fill="#EBEBEB" />
              <path d="M25 21.5V24.5H13V21.5H25Z" fill="black" />
            </svg>

            <input type="number" min="1" value={preke.kiekis} onChange={(e) => pakeistiRankiniuBudu(index, e.target.value)} />

            <svg onClick={() => prideti(index)} className="pliusas" width="38" height="46" viewBox="0 0 38 46">
              <path d="M0 0.5H28C33.5228 0.5 38 4.97715 38 10.5V35.5C38 41.0228 33.5228 45.5 28 45.5H0V0.5Z" fill="#EBEBEB" />
              <path d="M20.2 17H17.8V21.8H13V24.2H17.8V29H20.2V24.2H25V21.8H20.2V17Z" fill="black" />
            </svg>
          </div>

          <div className="cell suma">{(preke.price * preke.kiekis).toFixed(2)} €</div>

          <div onClick={() => istrinti(index)} className="cell delete">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 20C5 20.53 5.21 21.04 5.59 21.41C5.96 21.79 6.47 22 7 22H17C17.53 22 18.04 21.79 18.41 21.41C18.79 21.04 19 20.53 19 20V8H21V6H17V4C17 3.47 16.79 2.96 16.41 2.59C16.04 2.21 15.53 2 15 2H9C8.47 2 7.96 2.21 7.59 2.59C7.21 2.96 7 3.47 7 4V6H3V8H5V20ZM9 4H15V6H9V4ZM8 8H17V20H7V8H8Z"
                fill="black"
              />
              <path d="M9 10H11V18H9V10ZM13 10H15V18H13V10Z" fill="black" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Preke;
