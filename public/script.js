
function getRandomCuisine() {
    const cuisines = ["Italian", "Mexican", "Japanese", "Indian", "American"];
    return cuisines[Math.floor(Math.random() * cuisines.length)];
}

function getRandomLocation() {
    const locations = ["New York", "Tokyo", "Paris", "London", "Los Angeles"];
    return locations[Math.floor(Math.random() * locations.length)];
}

function getRandomRating() {
    return (Math.random() * (5 - 1) + 1).toFixed(1); // Random rating between 1 and 5 with one decimal place
}

function search() {
    const cuisineFilter = document.getElementById('cuisineFilter').value.toLowerCase();
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
  
    const lis = document.querySelectorAll('.restaurant');
    lis.forEach(li => {
      const cuisine = li.dataset.cuisine.toLowerCase();
      const name = li.innerText.toLowerCase();
  
      if ((cuisine.includes(cuisineFilter) || cuisineFilter === '') && name.includes(searchInput)) {
        li.style.display = 'block';
      } else {
        li.style.display = 'none';
      }
    });
}

function generateRandom() {
    const lis = document.querySelectorAll('.restaurant');
    const visibleLis = Array.from(lis).filter(li => li.style.display !== 'none');
    
    if (visibleLis.length > 0) {
        const randomIndex = Math.floor(Math.random() * visibleLis.length);
        alert(`Recommended Place: ${visibleLis[randomIndex].innerText}\nCuisine: ${getRandomCuisine()}\nLocation: ${getRandomLocation()}\nRating: ${getRandomRating()}`);
    } else {
        alert('No visible places to recommend. Adjust your filters or search criteria.');
    }
}

let map;

function initMap() {
    // Initialize Mapbox map
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [103.8198, 1.3521], // SG coordinates
        zoom: 11,
    });
}
