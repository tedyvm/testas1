import Preke from "./Preke"
import './Parduotuve.css'

const Parduotuve = () => {
  return (
      <>
          <h1>Parduotuve</h1>
          <h3>Prekiu sarasas</h3>
          <div className="prekiu-sarasas">
              <Preke />
              <Preke />
              <Preke />
              <Preke />
              <Preke />
          </div>
      </>
  )
}

export default Parduotuve