const express = require('express'); // Import express
const app = express(); // Initialize the app
const port = 3000; // Define where the server will live

app.get('/', (req, res) => {
  res.send('Welcome to the NGIT Backend Track!'); // What the user sees in the browser
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});