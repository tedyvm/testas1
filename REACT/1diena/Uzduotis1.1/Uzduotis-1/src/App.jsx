import "./App.css";
import Tekstas from "./components/Tekstas";
import Pirkiniai from "./components/Pirkiniai";
import Header from "./components/Header";
import Paslaugos from "./components/Paslaugos";

function App() {
  return (
    <>
      <Header />
      <Tekstas />
      <Pirkiniai />
      <Paslaugos />
    </>
  );
}

export default App;
