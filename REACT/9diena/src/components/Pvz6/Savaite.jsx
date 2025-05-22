import Diena from "./Diena";

const Savaite = () => {
  let temperatura = [14, 5, 8, 10, 12, 15, 20, -8, -15];

  return (
    <div>
      <h2>Savaite</h2>
      <div>
        {temperatura.map((temp, index) => (
          <Diena key={index} temp={temp} />
        ))}
      </div>
    </div>
  );
};

export default Savaite;
