const express = require('express');
const app = express();
const port = 3000;

// Sample data
const foodPlaces = [
  { id: 1, name: 'Restaurant A' },
  { id: 2, name: 'Cafe B' },
  { id: 3, name: 'Diner C' },
  // Add more places as needed
];

// Set up EJS
app.set('view engine', 'ejs');

// Serve static files from the public folder
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index', { foodPlaces });
});

app.listen(port, () => {
  console.log(`Food Recommendation App is running on http://localhost:${port}`);
});
