import Studentas from "./Studentas"

const Grupe = () => {
    let mokinys= {
        vardas: "Tomas",
        pavarde: "Tomauskas",
        amzius: 20,
        kursas: 2,
        grupe: "A",
        pazymiai: [10, 8, 9]
    }
  return (
      <div>
          <h2>Grupe</h2>
      <Studentas studentas={mokinys} />
      </div>
  )
}

export default Grupe