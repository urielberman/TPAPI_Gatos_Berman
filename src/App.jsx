import axios from "axios";
import './App.css';
import { useState } from "react";

function App() {
  const [catImage, setCatImage] = useState(null);

  const obtenerGatoAleatorio = () => {
    axios.get("https://api.thecatapi.com/v1/images/search")
      .then((response) => {
        setCatImage(response.data[0].url);
      })
      .catch((error) => {
        console.error("Error al obtener la imagen de gato:", error);
      });
  };

  return (
    <div className="container">
      <h1>Fotos y videos random de gatitos</h1>
      <button onClick={obtenerGatoAleatorio}>¡Clickeá para ver un gato!</button>
      <div className="image-container">
        {catImage && (
          <img src={catImage} alt="Gato aleatorio" />
        )}
      </div>
    </div>
  );
}

export default App;