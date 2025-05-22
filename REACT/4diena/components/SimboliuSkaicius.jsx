const SimboliuSkaicius = () => {
    const simboliuSk = () => {
        const ilgis = document.getElementById("zodis").value.length;
        console.log(ilgis);
  }
    return (
    <div>
          <h2>SimboliuSkaicius</h2>
          <input type="text" id="zodis" onInput={simboliuSk}/>
    </div>
  );
};

export default SimboliuSkaicius;
