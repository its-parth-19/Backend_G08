// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route for GET requests to the root
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Define a route for POST requests to /data
app.post('/data', (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `Received data: Name - ${name}, Age - ${age}` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
