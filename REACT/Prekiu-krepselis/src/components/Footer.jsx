import React from 'react';
import './Footer.css';

const Footer = ({ siunciam }) => {
  // Apskaičiuojam bendrą sumą čia
  const suma = siunciam.reduce((acc, preke) => acc + preke.price * preke.kiekis, 0).toFixed(2);

  const uzsakyti = () => {
    if (suma > 0) {
      alert(`Užsakoma suma: ${suma} € \n${siunciam.map(preke => `${preke.name} - ${preke.kiekis} vnt.`).join('\n')}`);
    } else {
      alert("Krepšelis tuščias");
    }
  };

  return (
    <div className='footer'>
      Užsakymo suma: {suma} €
      <button onClick={uzsakyti}>Užsakyti</button>
    </div>
  );
};

export default Footer;
