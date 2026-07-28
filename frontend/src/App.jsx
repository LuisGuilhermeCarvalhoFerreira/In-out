import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Destinos from "./components/Destinos";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MinhasViagens from "./pages/MinhasViagens";
import DetalhesDestino from "./pages/DetalhesDestino";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">

        {/* Navbar aparece em todas as páginas */}
        <Navbar />

        <Routes>

          {/* =========================
              HOME
          ========================= */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* =========================
              DESTINOS
          ========================= */}
          <Route
            path="/destinos"
            element={<Destinos />}
          />

          {/* =========================
              DETALHES DO DESTINO
              Exemplo:
              /destinos/1
              /destinos/2
              /destinos/3
          ========================= */}
          <Route
            path="/destinos/:id"
            element={<DetalhesDestino />}
          />

          {/* =========================
              MINHAS VIAGENS
          ========================= */}
          <Route
            path="/minhas-viagens"
            element={<MinhasViagens />}
          />

          {/* =========================
              LOGIN
          ========================= */}
          <Route
            path="/login"
            element={<Login />}
          />

          {/* =========================
              CADASTRO
          ========================= */}
          <Route
            path="/register"
            element={<Register />}
          />

        </Routes>

      </div>
    </Router>
  );
}

export default App;