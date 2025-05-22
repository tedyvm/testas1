const Skaiciai = () => {
    const skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const suma = (masyvas) => {
        let suma = 0;
        masyvas.forEach((skaicius) => {
            suma += skaicius;
        });
        return alert(suma);
    }
    const didziausias = (masyvas) => {
        let didziausias = skaiciai[0];
        masyvas.forEach((skaicius) => {
            if (skaicius > didziausias) {
                didziausias = skaicius;
            }
        });
        return alert(didziausias);
    }
    return (
    <div>
            <h2>Skaiciai</h2>
            <button onClick={()=>suma(skaiciai)}>skaiciu suma</button>
            <button onClick={()=>didziausias(skaiciai)}>didziausias skaicius</button>
    </div>
  );
};

export default Skaiciai;
