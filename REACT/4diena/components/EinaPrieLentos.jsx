const EinaPrieLentos = () => {
  const studentai = ['Jonas', 'Petras', 'Ona', 'Maryte', 'Tomas', 'Andrius', 'Darius', 'Raimondas', 'Eglė', 'Aistė'];
    const atsitiktinis = () => {
        const randomIndex = Math.floor(Math.random() * studentai.length);
        return alert(studentai[randomIndex]);
    }
    return (
    <div>
            <h2>EinaPrieLentos</h2>
            <button onClick={atsitiktinis}>Prie lentos eina</button>
          
    </div>
  );
};

export default EinaPrieLentos;
