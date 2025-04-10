const Laimejimas = () => {
    function paspausk() {
      alert('Laimejote 100 euru');
  }
    return (
    <div>
          <h2>Laimejimas</h2>
          <button onClick={paspausk}>Paspausk mane</button>
    </div>
  );
};

export default Laimejimas;
