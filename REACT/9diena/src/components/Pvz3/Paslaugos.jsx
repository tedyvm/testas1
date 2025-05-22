import Paslauga from "./Paslauga"

const Paslaugos = () => {
  return (
      <div><h2>Paslaugos</h2>
          <Paslauga pavadinimas="Kirpimas" kategorija="grozis" kaina="10" />
          <Paslauga pavadinimas="Manikiuras" kategorija="grozis" kaina="20" />
            <Paslauga pavadinimas="Karves melzimas" kategorija="gyvulininkyste" kaina="30" />    
          
      </div>
  )
}

export default Paslaugos