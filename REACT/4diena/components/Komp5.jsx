
const Komp5 = () => {
    const fnPaspaudimas = (event) => {
        console.log(event.nativeEvent);
        console.log(event.target);
        alert(`paspaudei ${event.target.innerText}`);
    }
  const fnUzvedus = (event) => {
    console.log(event.clientX);
  }
  return (
      <div>
          <button onClick={fnPaspaudimas} onMouseMove={fnUzvedus}>Pirmas</button>
            <button onClick={fnPaspaudimas}>Antras</button>
    </div>
  )
}

export default Komp5