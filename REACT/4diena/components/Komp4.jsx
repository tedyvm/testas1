
const Komp4 = () => {
    const pirmasButtonFn = () => {
        alert('Pirmas');
    }
    const antrasButtonFn = () => {
        alert('Antras');
    }
    const treciasButtonFn = () => {
        alert('Trečias');
    }
  return (
      <div>
          <button onClick={pirmasButtonFn}>Pirmas</button>
          <button onClick={antrasButtonFn}>Antras</button>
            <button>Trečias</button>
    </div>
  )
}

export default Komp4