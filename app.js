const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the public folder
app.use(express.static('public'));

// Sample data
const foodPlaces = [
    { id: 1, name: 'Restaurant A', cuisine: 'Italian', location: 'New York', rating: 4.5 },
    { id: 2, name: 'Cafe B', cuisine: 'Mexican', location: 'Tokyo', rating: 3.8 },
    { id: 3, name: 'Diner C', cuisine: 'Japanese', location: 'Paris', rating: 4.2 },
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
