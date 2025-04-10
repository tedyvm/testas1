const Komp8 = () => {
  let skaicius = Math.floor(Math.random() * 3) + 1;
    console.log(skaicius);
    const spetiSk = (spejimas) => {
        alert(skaicius == spejimas ? 'Teisingai' : 'Neteisingai');
    }
    return <div>
      <button onClick={()=>spetiSk(1)}>Spejimas 1</button>
      <button onClick={()=>spetiSk(2)}>Spejimas 2</button>
      <button onClick={()=>spetiSk(3)}>Spejimas 3</button>
  </div>;
};

export default Komp8;
