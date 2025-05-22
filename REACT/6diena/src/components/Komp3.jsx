import { useState } from "react"

const Komp3 = () => {
    const [skaicius, setSkaicius] = useState(0)
    const didintiVientu = () => {
        setSkaicius(skaicius + 1)
    }
    const mazintiVientu = () => {
        setSkaicius(skaicius - 1)
    }
    const didintiPenkais = () => {
        setSkaicius(skaicius + 5)
    }
    const mazintiPenkais = () => {
        setSkaicius(skaicius - 5)
    }
    const nunulinti = () => {
        setSkaicius(0)
    }
    return (
      <div><h2>Skaiciaus keitimas</h2>
          <button onClick={didintiVientu} >Diditni vienetu</button>
          <button onClick={mazintiVientu}>Mazinti vient</button>
          <button onClick={didintiPenkais}>Didinti penkais</button>
          <button onClick={mazintiPenkais}>mazinti penkiais</button>
          <button onClick={nunulinti}>nunulinti</button>
          <p>reiksme: {skaicius}</p>
      </div>
  )
}

export default Komp3