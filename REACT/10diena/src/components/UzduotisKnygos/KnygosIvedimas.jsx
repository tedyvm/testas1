import React, { useRef } from "react";

const KnygosIvedimas = (props) => {
  const formRef = useRef();
  const handleSubmit = (e) => {
      e.preventDefault();
    const forma = formRef.current;
    const pavadinimas = forma.pavadinimas.value;
    const autorius = forma.autorius.value;
      const metai = forma.metai.value;
    if (pavadinimas && autorius && metai) {
      alert("Knyga pridėta");
      props.getData({ pavadinimas, autorius, metai });
      console.log(pavadinimas, autorius, metai);
      forma.reset();
    }
  };
  return (
    <div>
      KnygosIvedimas
      <form action="" onSubmit={handleSubmit} ref={formRef}>
        <div>
          <label htmlFor="pavadinimas">Pavadinimas</label>
          <input type="text" id="pavadinimas" />
        </div>
        <div>
          <label htmlFor="autorius">Autorius</label>
          <input type="text" id="autorius" />
        </div>
        <div>
          <label htmlFor="metai">Metai</label>
          <input type="text" id="metai" />
        </div>
        <button type="submit">Irasyti</button>
      </form>
    </div>
  );
};

export default KnygosIvedimas;
