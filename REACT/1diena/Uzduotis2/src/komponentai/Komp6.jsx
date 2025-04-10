const skaiciai1 = [1, 2, 3, 4, 5];
const skaiciai2 = [];

const Komp6 = () => {
  return (
      <div>
          <h2>
              komp6
          </h2>
          <h3>skaiciai 1</h3>
          {skaiciai1.length > 0 ? (
              <ul>
                  {skaiciai1.map((skaicius, index) => (
                      <li key={index}>{skaicius}</li>
                  ))}
              </ul>
          ) : (
                  <p>Skaiciu nera</p>
          )
          }
          <h3>skaiciai 2</h3>
    </div>
  )
}

export default Komp6