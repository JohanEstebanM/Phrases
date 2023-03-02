import React, { useState } from "react";
import "./App.css";
import Authors from "./components/Authors";
import Phrases from "./components/Phrases";
import Img from "./assets/Img.json";
import { getRandomNumber as random } from "./utils/getRamdonNumber";
import Data from "./assets/Data.json";

function App() {
  const [randomNum, setRandomNum] = useState(random(0, Data.length - 1));
  const [randomImg, setRandomImg] = useState(random(0, Img.length - 1));

  const changePhrase = () => {
    let newPhraseIndex = random(0, Data.length - 1);
    while (newPhraseIndex === randomNum) {
      newPhraseIndex = random(0, Data.length - 1);
    }
    setRandomNum(newPhraseIndex);
  };

  const changeImg = () => {
    let newImgIndex = random(0, Img.length - 1);
    while (newImgIndex === randomImg) {
      newImgIndex = random(0, Img.length - 1);
    }
    setRandomImg(newImgIndex);
  };

  const bgImage = `url(${Img[randomImg].img})`;
  return (
    <div className="App">
      <h1>Frases del espacio</h1>
      <div className="Card">
        <div className="Phrases">
          <Phrases num={randomNum} />
        </div>
        <div className="Authors">
          <p>Autor: &nbsp;</p>
          <Authors num={randomNum} />
        </div>
      </div>
      <button
        onClick={() => {
          changeImg();
          changePhrase();
        }}
      >
        Cambiar frase
      </button>
      <style>{`:root { --bg-image: ${bgImage}; }`}</style>
    </div>
  );
}

export default App;
