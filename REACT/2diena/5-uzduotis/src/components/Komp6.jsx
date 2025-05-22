// TODO: prijunkite šį komponentą prie App.jsx

const Komp6 = () => {
  let temperaturos = [15, 20, 25, 30, 35, 40];

  return (
    // TODO: atvaizduokite visas temperatūras
    // naudodami map funkciją, įdėdami viską
    // į lentelę (table),
    // kurioje būtų du stulpeliai:
    // 1. eilutės numeris (1, 2, 3, ...)
    // 2. temperatūra iš masyvo

    <div>
      <h1>Temperatura</h1>
      <table style={{ border: "1px solid black" }}>
        <tr>
          <td>Nr</td>
          <td>Temperatura</td>
        </tr>
        {temperaturos.map((temp, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{temp}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Komp6;
