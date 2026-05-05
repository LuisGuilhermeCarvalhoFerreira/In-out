const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

console.log("Servidor iniciando...");
 
app.use(cors());
app.use(express.json());

// 🔌 Conexão com o MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Cenoura12!',
 database: 'inout_db'
});

// Teste de conexão
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar:', err);
    return;
  }
  console.log('🔥 Conectado ao MySQL!');
});

// 📌 Rota de teste
app.get('/', (req, res) => {
  res.send('API InOut funcionando 🚀');
});

// 📌 Rota de destinos
app.get('/destinos', (req, res) => {
  db.query('SELECT * FROM destinos', (err, result) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(result);
  });
});



app.post('/register', async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        // 1. Encriptar a senha
        const hash = await bcrypt.hash(senha, saltRounds);

        // 2. Inserir no banco
        const sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
        db.query(sql, [nome, email, hash], (err, result) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(400).send({ message: "Este e-mail já está cadastrado!" });
                }
                return res.status(500).send(err);
            }
            res.status(201).send({ message: "Usuário cadastrado com sucesso!" });
        });
    } catch (error) {
        res.status(500).send({ message: "Erro ao processar cadastro." });
    }
});

// Rota de Login
app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    // 1. Procurar o usuário pelo e-mail
    const sql = "SELECT * FROM usuarios WHERE email = ?";
    db.query(sql, [email], async (err, result) => {
        if (err) return res.status(500).send(err);
        
        if (result.length > 0) {
            // 2. Comparar a senha digitada com a senha criptografada do banco
            const match = await bcrypt.compare(senha, result[0].senha);
            
            if (match) {
                // Login com sucesso! 
                // (Mais tarde podemos adicionar um Token aqui)
                res.status(200).send({ 
                    message: "Login realizado com sucesso!",
                    user: { nome: result[0].nome, email: result[0].email }
                });
            } else {
                res.status(401).send({ message: "Senha incorreta!" });
            }
        } else {
            res.status(404).send({ message: "Usuário não encontrado!" });
        }
    });
});

// 🚀 Servidor rodando
app.listen(3001, () => {
  console.log('Servidor rodando em http://localhost:3001');
});