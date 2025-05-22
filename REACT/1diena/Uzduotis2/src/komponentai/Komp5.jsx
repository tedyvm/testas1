const Komp5 = () => {
  const title = "Medziai"
  const medziai = ["Uosis", "Berzas", "Pušis", "Klevas", "Ąžuolas"]
  
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {medziai.map((medis, index) => (
                    <li key={index}>{medis}</li>
                ))}
            </ul>

    </div>
  )
}

export default Komp5