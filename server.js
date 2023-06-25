const express = require('express');
const app = express();
const path = require('path');

const port = 3001;

// Serve static files from the "public" directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Define a route to serve the first HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'indexLight.html'));
});

app.get('/indexDark.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'indexDark.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
