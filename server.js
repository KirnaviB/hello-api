const express = require('express');
const app = express();

// Hello World
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

// Current time
app.get('/time', (req, res) => {
  res.json({
    currentTime: new Date().toLocaleTimeString()
  });
});

// Random number
app.get('/random', (req, res) => {
  res.json({
    randomNumber: Math.floor(Math.random() * 100)
  });
});

// Route parameter
app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.json({
    message: `Hello, ${name}! Welcome to the API.`
  });
});

app.listen(3000, () => {
  console.log('Hello API running on port 3000');
});
