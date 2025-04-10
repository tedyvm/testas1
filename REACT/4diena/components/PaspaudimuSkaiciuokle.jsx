const PaspaudimuSkaiciuokle = () => {
    let skaicius = 0
    const plius = () => {
        skaicius++
        console.log(skaicius)
    }
    return (
    <div>
          <h2>PaspaudimuSkaiciuokle</h2>
          <button onClick={plius}>spausk</button>
    </div>
  );
};

export default PaspaudimuSkaiciuokle;
