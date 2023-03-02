import React from "react";
import Data from "../assets/Data.json"; // se importa el archivo JSON con los datos de las frases

const authors = ({ num }) => {
  // se define un componente de función "authors" que recibe un prop llamado "num"
  const author = Data[num].author; // se obtiene el autor correspondiente al índice "num" del archivo JSON de datos
  return (
    <div>
      <p>{author}</p> {/* se renderiza el autor */}
    </div>
  );
};

export default authors; // se exporta el componente de función "authors"
