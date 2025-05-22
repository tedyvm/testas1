const Tikrinimai = () => {
    const skaicius = Math.floor(Math.random() * 100) + 1;
    console.log(skaicius);
    const arLyginis = () => {
      skaicius%2==0?alert('Lyginis'):alert('Nelyginis');
    }
    const arDidesnisUz30 = () => {
        skaicius>30?alert('Didesnis uz 30'):('Mažesnis uz 30');
    }
    const arPirminis = () => {
        let pirminis = true;
        for (let i = 2; i < skaicius; i++) {
            if (skaicius % i === 0) {
                pirminis = false;
                break;
            }
        }
        return pirminis ? alert('Pirminis') : alert('Ne pirminis');
    }
    return (
    <div>
            <h2>Tikrinimai</h2>
            <button onClick={arLyginis}>ar lyginis</button>
            <button onClick={arDidesnisUz30}>ar didesnis uz 30</button>
            <button onClick={arPirminis}>ar pirminis</button>
    </div>
  );
};

export default Tikrinimai;
