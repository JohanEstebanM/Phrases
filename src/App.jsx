import React, { useState } from "react";
import "./App.css";
import Authors from "./components/Authors";
import Phrases from "./components/Phrases";
import Img from "./assets/Img.json"; // se importa el archivo JSON con imágenes
import { getRandomNumber as random } from "./utils/getRamdonNumber"; // se importa una función utilitaria que genera números aleatorios
import Data from "./assets/Data.json"; // se importa el archivo JSON con los datos de las frases

function App() {
  // se crean dos variables de estado: randomNum y randomImg
  const [randomNum, setRandomNum] = useState(random(0, Data.length - 1)); // randomNum es un número aleatorio que se usará para seleccionar una frase
  const [randomImg, setRandomImg] = useState(random(0, Img.length - 1)); // randomImg es un número aleatorio que se usará para seleccionar una imagen

  // función que cambia la frase actual por otra aleatoria
  const changePhrase = () => {
    let newPhraseIndex = random(0, Data.length - 1); // se genera un nuevo número aleatorio
    while (newPhraseIndex === randomNum) {
      // se verifica que el nuevo número aleatorio no sea igual al número actual
      newPhraseIndex = random(0, Data.length - 1);
    }
    setRandomNum(newPhraseIndex); // se actualiza el estado de randomNum con el nuevo número aleatorio generado
  };

  // función que cambia la imagen actual por otra aleatoria
  const changeImg = () => {
    let newImgIndex = random(0, Img.length - 1); // se genera un nuevo número aleatorio
    while (newImgIndex === randomImg) {
      // se verifica que el nuevo número aleatorio no sea igual al número actual
      newImgIndex = random(0, Img.length - 1);
    }
    setRandomImg(newImgIndex); // se actualiza el estado de randomImg con el nuevo número aleatorio generado
  };

  const bgImage = `url(${Img[randomImg].img})`; // se genera una URL de imagen para usar como fondo de la aplicación

  // se renderiza la aplicación
  return (
    <div className="App">
      <h1>Frases del espacio</h1>
      <div className="Card">
        <div className="Phrases">
          <Phrases num={randomNum} />{" "}
          {/* se renderiza un componente de frase con el índice aleatorio */}
        </div>
        <div className="Authors">
          <p>Autor: &nbsp;</p>
          <Authors num={randomNum} />{" "}
          {/* se renderiza un componente de autor con el índice aleatorio */}
        </div>
      </div>
      <button
        onClick={() => {
          changeImg(); // se llama a la función que cambia la imagen
          changePhrase(); // se llama a la función que cambia la frase
        }}
      >
        Cambiar frase
      </button>
      <style>{`:root { --bg-image: ${bgImage}; }`}</style>{" "}
      {/* se usa la URL de la imagen como fondo de la aplicación */}
    </div>
  );
}

export default App;
