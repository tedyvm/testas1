const TekstoLaukas = () => {
    const skaiciuoti = (e) => {
        const ilgis = document.getElementById("laukas").value.length;
        if (ilgis < 100) {
            document.getElementById("atsakymas2").innerHTML = "Ivestas simboliu skaicius: " + ilgis;
            document.getElementById("atsakymas2").style.color = "black";
        }
        else {
            document.getElementById("atsakymas2").innerHTML = "Per daug teksto";
            document.getElementById("atsakymas2").style.color = "red";
        }
    }
    return (
    <div>
          <h2>TekstoLaukas</h2>
            <textarea name="tekstas" id="laukas" onInput={skaiciuoti}></textarea>
            <p id="atsakymas2"></p>
    </div>
  );
};

export default TekstoLaukas;
