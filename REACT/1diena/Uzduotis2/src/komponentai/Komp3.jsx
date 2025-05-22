const Komp3 = () => {
  const studentas = {
    name: "Petras",
    pavarde: "Petraitis",
    mokykla: "Vilniaus universitetas",
    vidurkis: 8.5,
    kursas: 3,
  };

  return (
    <div>
          <h1>Komp3</h1>
          <div className="studentas">
              <h2>Studento info</h2>
              <p>Studentas {studentas.name} {studentas.pavarde}</p>
              <p>Moksosi {studentas.mokykla}, {studentas.kursas} kurse</p>
              <p>Vidurkis: {studentas.vidurkis}</p>
          </div>
    </div>
  );
};

export default Komp3;
