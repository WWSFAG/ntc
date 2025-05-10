
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // Na razie tylko symulacja logowania
  if (username === 'admin' && password === 'admin') {
    res.json({ token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ error: 'Nieprawidłowe dane logowania' });
  }
});

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
