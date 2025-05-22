const Studentas = ({studentas}) => {
  console.log(studentas);
    return <div>
        <h3>{studentas.vardas} {studentas.pavarde}</h3>
        <p></p>
        <p>{studentas.amzius}</p>
        <p>{studentas.kursas}</p>
        <p>{studentas.grupe}</p>
        <p>{studentas.pazymiai}</p>
        <p>{studentas.pazymiai.reduce((a, b) => a + b, 0) / studentas.pazymiai.length}</p>
        <p>{studentas.pazymiai.length}</p>
        <p>{studentas.pazymiai.reduce((a, b) => a + b, 0) / studentas.pazymiai.length > 5 ? "Pavyko" : "Nepavyko"}</p>
  </div>;
};

export default Studentas;
