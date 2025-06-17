import axios from "axios";
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const url="https://api.thecatapi.com/v1/images/search"
  const [catImage, setCatImage] = useState(null);
  
  
  useEffect(() => {
    axios.get(url).then((response) => {
      setCatImage(response.data[0].url); 
      });
  }, []);

  const obtenerGatoAleatorio = () => {
    axios.get(url)
      .then((response) => {
        setCatImage(response.data[0].url);
      })
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