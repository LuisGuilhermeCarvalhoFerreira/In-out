import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Hero from '../components/Hero'; // Vamos criar esse componente abaixo

function Home() {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/destinos')
      .then(res => setDestinos(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <main>
      {/* 1. Hero Section aparece primeiro */}
      <Hero /> 

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Destinos em Destaque</h2>
          <p className="section-subtitle">As melhores escolhas para sua próxima aventura</p>
        </div>

        {/* 2. O GRID que organiza os cards */}
        <div className="grid"> 
          {destinos.map((dest) => (
            <Card key={dest.id} destino={dest} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;