const Skaiciuotuvas = () => {
    const fnPrideti = () => {
        const pirmasSk = document.querySelector('#pirmas').value;
        const antrasSk = document.querySelector('#antras').value;
        const rezultatas = Number(pirmasSk) + Number(antrasSk);
        console.log(rezultatas);
    }
    const fnAtimti = () => {
        const pirmasSk = document.querySelector('#pirmas').value;
        const antrasSk = document.querySelector('#antras').value;
        const rezultatas = Number(pirmasSk) - Number(antrasSk);
        console.log(rezultatas);
    }
    const fnDauginti = () => {
        const pirmasSk = document.querySelector('#pirmas').value;
        const antrasSk = document.querySelector('#antras').value;
        const rezultatas = Number(pirmasSk) * Number(antrasSk);
        console.log(rezultatas);
    }
    const fnDalinti = () => {
        const pirmasSk = document.querySelector('#pirmas').value;
        const antrasSk = document.querySelector('#antras').value;
        const rezultatas = Number(pirmasSk) / Number(antrasSk);
        console.log(rezultatas);
    }
    return (
    <div>
          <h2>Skaiciuotuvas</h2>
          <input type="number" id="pirmas"/>
          <input type="number" id="antras"/>
          <button onClick={fnPrideti}>+</button>
          <button onClick={fnAtimti}>-</button>
          <button onClick={fnDauginti}>*</button>
          <button onClick={fnDalinti}>/</button>
    </div>
  );
};

export default Skaiciuotuvas;
