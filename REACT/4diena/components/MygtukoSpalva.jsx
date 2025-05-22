const MygtukoSpalva = () => {
    const keistiSpalva = () => {
       const naujaSpalva = `rgb(${Math.floor(Math.random() * 256)}, 
                             ${Math.floor(Math.random() * 256)}, 
                             ${Math.floor(Math.random() * 256)})`;
       document.querySelector("button").style.backgroundColor = naujaSpalva;
    }
    return (
    <div>
          <h2>MygtukoSpalva</h2>
          <button style={{ color: "white", backgroundColor: "blue" }} onClick={keistiSpalva}>mygtukas</button>
    </div>
  );
};

export default MygtukoSpalva;
