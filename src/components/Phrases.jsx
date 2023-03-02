import React from "react";
import Data from "../assets/Data.json"; // se importa el archivo JSON con los datos de las frases

const phrases = ({ num }) => {
  // se define un componente de función "phrases" que recibe un prop llamado "num"
  const phrase = Data[num].phrase; // se obtiene la frase correspondiente al índice "num" del archivo JSON de datos
  return (
    <div>
      <p>{phrase}</p> {/* se renderiza la frase */}
    </div>
  );
};

export default phrases; // se exporta el componente de función "phrases"
