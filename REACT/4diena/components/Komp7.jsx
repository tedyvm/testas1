const Komp7 = () => {
   
        let skaicius = Math.floor(Math.random() * 10) + 1;
        console.log(skaicius);

    const patikrintiSkaiciu = () => {
        if (skaicius >5 ) {
            alert('skaicius didesni uz 5');
        } else {
            alert(`skaicius mazesni uz 5`);
        }
    }
    return (
      <div>
          <h2>Komp7</h2>
            <button onClick={patikrintiSkaiciu}>Slaptas skaicius</button>
            <button>pergenruiti</button>
    </div>
  )
}

export default Komp7