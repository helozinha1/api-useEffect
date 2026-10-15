import { useState, useEffect } from 'react';

export default function App() {

  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar a imagem:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>Foto de Cachorro Aleatória</h1>

      {loading ? (
        <p className="loading">Carregando imagem...</p>
      ) : (
        dogImage && (
          <div className="card-dog">
            <img src={dogImage} alt="Cachorro aleatório" />
          </div>
        )
      )}
    </div>
  );
}