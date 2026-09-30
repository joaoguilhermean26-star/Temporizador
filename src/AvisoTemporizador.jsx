import { useState, useEffect } from "react";

function AvisoTemporizador() {
  var [visivel, setVisivel] = useState(true);

  useEffect(function () {
    var timer = setTimeout(function () {
      setVisivel(false);
    }, 3000);

    // limpeza: roda quando o componente sai da tela
    return function () {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {visivel && <p>Bem-vindo!</p>}
    </div>
  );
}

export default AvisoTemporizador;