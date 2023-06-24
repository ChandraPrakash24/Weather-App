const express = require('express');
const app = express();
const path = require('path');

const port = 3001;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve the first HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Define a route to serve the second HTML file
app.get('/index2.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index2.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
