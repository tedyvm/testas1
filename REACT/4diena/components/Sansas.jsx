const Sansas = () => {
    let skaicius = Math.floor(Math.random() * 10) + 1;
    const patikrink = () => {
        if (skaicius > 5) {
            alert('Jus laimejote');
        } else {
            alert('Jus pralaimejote');
        }
    }
    return (
    <div>
            <h2>Sansas</h2>
            <button onClick={patikrink}>Spek</button>
          
    </div>
  );
};

export default Sansas;
