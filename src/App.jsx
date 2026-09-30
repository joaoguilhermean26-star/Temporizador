import { useState } from "react";
import AvisoTemporizador from "./AvisoTemporizador";

function App() {
  var [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <h1>Aviso com Temporizador</h1>
      <button onClick={function () { setMostrar(!mostrar); }}>
        {mostrar ? "Remover aviso" : "Mostrar aviso"}
      </button>

      {mostrar && <AvisoTemporizador />}
    </div>
  );
}

export default App;