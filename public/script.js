// Your Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hlcm1pbiIsImEiOiJjbHAxZWg0ZGMwZXgxMnBxdWU0eWxvNzV2In0.4PzeCZSg-z9nprPITT2nwg';

// Mock data (replace this with actual API integration later)
let mockData = [
    { name: 'Pizza Palace', types: ['Italian', 'Pizza'], vicinity: '123 Orchard Rd, Singapore', rating: 4.5 },
    { name: 'Sushi Delight', types: ['Japanese', 'Sushi'], vicinity: '456 Marina Bay Sands, Singapore', rating: 4.2 },
    { name: 'Taco Haven', types: ['Mexican'], vicinity: '789 Clarke Quay, Singapore', rating: 3.8 },
    { name: 'Curry House', types: ['Indian'], vicinity: '101 Little India, Singapore', rating: 4.0 },
    { name: 'Burger Bliss', types: ['American', 'Burgers'], vicinity: '234 Sentosa Island, Singapore', rating: 4.1 },
    { name: 'Noodle Nook', types: ['Chinese', 'Noodles'], vicinity: '567 Chinatown, Singapore', rating: 3.9 },
    { name: 'Mediterranean Bites', types: ['Mediterranean'], vicinity: '890 Raffles Place, Singapore', rating: 4.3 },
    { name: 'Tandoori Treat', types: ['Indian'], vicinity: '345 Serangoon Rd, Singapore', rating: 4.2 },
    { name: 'Sizzling Steakhouse', types: ['American', 'Steak'], vicinity: '678 Orchard Rd, Singapore', rating: 4.4 },
    { name: 'Dim Sum Delight', types: ['Chinese', 'Dim Sum'], vicinity: '912 East Coast Rd, Singapore', rating: 4.1 },
    { name: 'Seafood Sensation', types: ['Seafood'], vicinity: '543 Sentosa Cove, Singapore', rating: 4.0 },
    { name: 'Vegetarian Vibes', types: ['Vegetarian'], vicinity: '876 Bukit Timah Rd, Singapore', rating: 4.2 },
    { name: 'Pasta Paradise', types: ['Italian', 'Pasta'], vicinity: '234 Robertson Quay, Singapore', rating: 4.3 },
    { name: 'Bak Kut Teh Bliss', types: ['Chinese', 'Bak Kut Teh'], vicinity: '789 Balestier Rd, Singapore', rating: 4.0 },
    { name: 'BBQ Bonanza', types: ['Barbecue'], vicinity: '345 Bugis St, Singapore', rating: 4.4 },
    { name: 'Crepes & More', types: ['French', 'Crepes'], vicinity: '678 Somerset Rd, Singapore', rating: 4.1 },
    { name: 'Ramen Retreat', types: ['Japanese', 'Ramen'], vicinity: '912 Novena Square, Singapore', rating: 4.2 },
    { name: 'Thai Taste', types: ['Thai'], vicinity: '543 Holland V, Singapore', rating: 4.3 },
    { name: 'Korean Delight', types: ['Korean'], vicinity: '876 Tanjong Pagar, Singapore', rating: 4.0 },
    { name: 'Fusion Feast', types: ['International'], vicinity: '234 Suntec City, Singapore', rating: 4.1 },
    { name: 'Hot Pot Haven', types: ['Chinese', 'Hot Pot'], vicinity: '789 Marina Square, Singapore', rating: 4.2 },
    { name: 'Cakes & More', types: ['Desserts', 'Bakery'], vicinity: '345 Tiong Bahru, Singapore', rating: 4.3 },
    { name: 'Peranakan Pleasures', types: ['Peranakan'], vicinity: '678 Katong, Singapore', rating: 4.0 },
    { name: 'Middle Eastern Magic', types: ['Middle Eastern'], vicinity: '912 Arab St, Singapore', rating: 4.1 },
    { name: 'Juice Joint', types: ['Healthy', 'Juices'], vicinity: '543 Orchard Central, Singapore', rating: 4.2 },
    { name: 'Sizzling Satay', types: ['Singaporean', 'Satay'], vicinity: '876 Lau Pa Sat, Singapore', rating: 4.3 },
    { name: 'Dumpling Delight', types: ['Chinese', 'Dumplings'], vicinity: '234 Chinatown, Singapore', rating: 4.0 },
    { name: 'Gourmet Grilled Cheese', types: ['American', 'Sandwiches'], vicinity: '789 Raffles City, Singapore', rating: 4.1 },
    { name: 'Bubble Tea Bliss', types: ['Beverages', 'Bubble Tea'], vicinity: '101 Somerset, Singapore', rating: 4.2 },
    { name: 'Waffle Wonderland', types: ['Desserts', 'Waffles'], vicinity: '234 Clarke Quay, Singapore', rating: 4.3 },
    { name: 'Vegetarian Variety', types: ['Vegetarian'], vicinity: '567 Orchard Central, Singapore', rating: 4.0 },
    { name: 'Soup & Salad Spot', types: ['Healthy', 'Soups', 'Salads'], vicinity: '890 Novena, Singapore', rating: 4.1 },
    { name: 'Fish & Chips Fantasy', types: ['British', 'Fish & Chips'], vicinity: '123 Bugis, Singapore', rating: 4.2 },
    { name: 'Poke Bowl Paradise', types: ['Hawaiian', 'Poke Bowls'], vicinity: '456 Marina Bay, Singapore', rating: 4.3 },
    { name: 'Italian Ice Cream Indulgence', types: ['Italian', 'Ice Cream'], vicinity: '789 Orchard Rd, Singapore', rating: 4.0 },
    { name: 'Vietnamese Vibes', types: ['Vietnamese'], vicinity: '101 Joo Chiat, Singapore', rating: 4.1 },
    { name: 'Spanish Tapas Treasure', types: ['Spanish', 'Tapas'], vicinity: '234 Sentosa, Singapore', rating: 4.2 },
    { name: 'Crispy Chicken Corner', types: ['Fast Food', 'Chicken'], vicinity: '567 Chinatown, Singapore', rating: 4.3 },
    { name: 'Milkshake Marvel', types: ['Beverages', 'Milkshakes'], vicinity: '890 Somerset, Singapore', rating: 4.0 },
    { name: 'Ramly Burger Retreat', types: ['Malaysian', 'Burgers'], vicinity: '123 Geylang, Singapore', rating: 4.1 },
    { name: 'Japanese Pancake Paradise', types: ['Japanese', 'Pancakes'], vicinity: '456 Bugis, Singapore', rating: 4.2 },
    { name: 'Falafel Fantasy', types: ['Middle Eastern', 'Falafel'], vicinity: '789 Orchard Central, Singapore', rating: 4.3 },
    { name: 'Crab Curry Corner', types: ['Singaporean', 'Crab', 'Curry'], vicinity: '101 East Coast, Singapore', rating: 4.0 },
    { name: 'Green Tea Galore', types: ['Japanese', 'Green Tea'], vicinity: '234 Chinatown, Singapore', rating: 4.1 },
    { name: 'Sizzling Satay Skewers', types: ['Singaporean', 'Satay'], vicinity: '567 Lau Pa Sat, Singapore', rating: 4.2 },
    { name: 'Healthy Bowls Haven', types: ['Healthy', 'Bowls'], vicinity: '890 Raffles Place, Singapore', rating: 4.3 },
    { name: 'Truffle Fries Treat', types: ['Snacks', 'Truffle Fries'], vicinity: '123 Orchard Rd, Singapore', rating: 4.0 },
];


// Function to fetch data (currently using mock data)
async function fetchData() {
    return mockData;
}


// Function to generate a random place from mock data
function generateRandom() {
    console.log('random button clicked!');
    const data = mockData;

    if (data && data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const selectedPlace = data[randomIndex];

        const cuisine = selectedPlace.types.join(', ');
        const location = selectedPlace.vicinity;
        const rating = selectedPlace.rating || 'N/A';

        // Create a result element
        const resultElement = document.createElement('div');
        resultElement.classList.add('result-item');
        resultElement.innerHTML = `
            <p><strong>Recommended Place:</strong> ${selectedPlace.name}</p>
            <p><strong>Cuisine:</strong> ${cuisine}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Rating:</strong> ${rating}</p>
        `;

        // Get the result container and update it
        const randomResultContainer = document.getElementById('randomResultContainer');
        randomResultContainer.innerHTML = '';
        randomResultContainer.appendChild(resultElement);
    } else {
        alert('No places available. Adjust your filters or try again later.');
    }
}


// Initial setup
let map;

function initMap() {
    console.log('Map is being initialized.');
    // Initialize Mapbox map
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [103.8198, 1.3521], // SG coordinates
        zoom: 11
    });

    // Add map controls, e.g., zoom control
    map.addControl(new mapboxgl.NavigationControl());

    // Call a function to add markers (to be implemented)
    addMarkers();
}

function initMap() {
    console.log('Map is being initialized.');
    // Initialize Mapbox map
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [103.8198, 1.3521], // SG coordinates
        zoom: 11
    });

    // Add map controls, e.g., zoom control
    map.addControl(new mapboxgl.NavigationControl());

    // Call a function to add markers (to be implemented)
    addMarkers();
}

///
document.addEventListener('DOMContentLoaded', function () {
    initMap();
    addMarkers();

    // Get all section elements
    const sections = document.querySelectorAll('.fade');

    // Listen for scroll events
    window.addEventListener('scroll', function () {
        // Check each section's position in the viewport
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();

            // If the section is in the viewport, add the 'fade' class
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                section.classList.add('fade');
            } else {
                // Remove the 'fade' class if the section is not in the viewport
                section.classList.remove('fade');
            }
        });
    });
});