const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.post('/add', express.json(), (req, res) => {
  const { a, b } = req.body;
  const result = a + b;
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
