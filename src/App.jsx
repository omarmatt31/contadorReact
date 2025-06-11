import "bootstrap/dist/css/bootstrap.min.css";
import Informacion from "./components/informacion";
import Contador from "./components/Contador";

function App() {
  //aqui va la logica del componente
  const comision = "c11";

  return (
    // aqui puedo agregar algo de logica
    <>
      {/* Aqui va todo el maquetado html*/}
      <main className="container my-5">
        <h1>Hola Mundo</h1>
        <Informacion comisionProps={comision} anio={2025} />
        <Contador />
      </main>
    </>
  );
}

export default App;
