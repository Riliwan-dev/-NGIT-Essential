const express = require('express'); // Import express
const app = express(); // Initialize the app
const port = 3000; // Define where the server will live

app.get('/', (req, res) => {
  res.send('Welcome to the NGIT Backend Track!'); // What the user sees in the browser
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


// const express = require('express');
// const app = express();
// const PORT = 3000;

// // Middleware to parse JSON data
// app.use(express.json());

// // Random "Bacterial Gene" Data
// let geneData = [
//     { id: 1, mechanism: "Conjugation", status: "Active" },
//     { id: 2, mechanism: "Transformation", status: "Pending" }
// ];

// // GET Route: Fetch all gene transfer records
// app.get('/api/hgt', (req, res) => {
//     res.status(200).json(geneData);
// });

// // POST Route: Add a new gene transfer experiment
// app.post('/api/hgt', (req, res) => {
//     const newEntry = {
//         id: geneData.length + 1,
//         mechanism: req.body.mechanism,
//         status: "Observed"
//     };
//     geneData.push(newEntry);
//     res.status(201).send("Experiment Recorded Successfully!");
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });