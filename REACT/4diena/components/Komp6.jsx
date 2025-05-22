const Komp6 = () => {
    const slaptasSkaicius = () => {
        const skaicius = Math.floor(Math.random() * 10) + 1;
        console.log(skaicius);
    };
    return (
      <div>
          <h2>Komp6</h2>
          <button onClick={slaptasSkaicius}>Slaptas skaicius</button>
    </div>
  )
}

export default Komp6