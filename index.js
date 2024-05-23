// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 2000;

const products = require('./data/products');
const users = require('./data/users');

app.use(cors());
app.use(bodyParser.json());

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ token: user.token, userId: user.id });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.get('/api/user', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  const user = users.find(u => u.token === token);

  if (user) {
    res.json(user);
  } else {
    res.status(401).json({ message: 'Invalid token' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
