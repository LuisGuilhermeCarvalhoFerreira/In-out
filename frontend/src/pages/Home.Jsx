import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';

function Home() {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    const fetchDestinos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/destinos');
        setDestinos(response.data);
      } catch (error) {
        console.error("Erro ao carregar destinos:", error);
      }
    };
    fetchDestinos();
  }, []);

  return (
    <main className="container">
      <h2 style={{ marginBottom: '2rem' }}>Destinos Recomendados</h2>
      <div className="grid">
        {destinos.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}

export default Home;