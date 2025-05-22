const GeriausiasMedis = () => {
  const fnMedis = (medis) => {
    if (medis == "uosis") return alert("oho koks medis");
    if (medis == "azuolas") return alert("labai mielas rastas");
    if (medis == "berzas") return alert("labai grazus medis");
  };

  return (
    <div>
          <h2>GeriausiasMedis</h2>
          {["uosis", "azuolas", "berzas"].map((medis) => (
            <button key={medis} onClick={() => fnMedis(medis)}>
              {medis}
            </button>
          ))}
    </div>
  );
};

export default GeriausiasMedis;
