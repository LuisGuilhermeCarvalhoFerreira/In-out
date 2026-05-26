import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Destinos from './components/Destinos';
import Navbar from './components/Navbar';
import MinhasViagens from './pages/MinhasViagens'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* O Navbar fica aqui para aparecer em todas as páginas */}
        <Navbar />
        
        <Routes>
          {/* Rota para a página inicial (Home ou Hero) */}
          <Route path="/" element={<Home />} />
          
          {/* LIGAndo os componentes nessa bomba 👇 */}
          <Route path="/destinos" element={<Destinos />} />

          <Route path="/minhas-viagens" element={<MinhasViagens />} /> {/* Página para mostrar as viagens do usuário, pode ser um dashboard ou algo do tipo */}
          
          {/* Outras rotas caso já queira deixar no jeitex rsrsrs*/}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;