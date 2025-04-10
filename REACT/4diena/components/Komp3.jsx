const Komp3 = () => {
    const fnPasaulis3 = (event) => {
        console.log(event);
        console.log("Paspaustas mygtukas3");
    };
    return (
      <div>
            <button id="Komp3" onClick={fnPasaulis3}>Spausti cia3</button>
            <input type="text" id="inputKomp3" onClick={fnPasaulis3}/>
      </div>
    );
  };
  
  export default Komp3;
  