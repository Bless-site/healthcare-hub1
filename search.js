// search.js

const facilities = [/*...your facilities array (same as in your HTML)...*/];

function performSearch(query) {
    const lowerQuery = query.toLowerCase();
    const results = facilities.filter(facility =>
        facility.name.toLowerCase().includes(lowerQuery) ||
        facility.type.toLowerCase().includes(lowerQuery) ||
        facility.services.toLowerCase().includes(lowerQuery)
    );

    return results;
}

function displayResults(results) {
    document.getElementById('search-results')?.remove();
    document.getElementById('map')?.remove();

    const resultsDiv = document.createElement('div');
    resultsDiv.id = 'search-results';
    resultsDiv.style.margin = "20px";
    resultsDiv.style.backgroundColor = "#F8F9FA";
    resultsDiv.style.padding = "20px";
    resultsDiv.style.borderRadius = "8px";
    resultsDiv.style.color = "black";

    const mapDiv = document.createElement('div');
    mapDiv.id = 'map';
    mapDiv.style.height = "400px";
    mapDiv.style.marginTop = "20px";

    if (results.length > 0) {
        results.forEach(facility => {
            const info = document.createElement('div');
            info.innerHTML = `
                <h3>${facility.name} (${facility.type})</h3>
                <p><strong>Contact:</strong> ${facility.contact}</p>
                <p><strong>Hours:</strong> ${facility.hours}</p>
                <p><strong>Services:</strong> ${facility.services}</p>
                <hr>
            `;
            resultsDiv.appendChild(info);
        });
    } else {
        resultsDiv.textContent = "No matching facilities found.";
    }

    document.body.insertBefore(resultsDiv, document.querySelector('.main-content') || document.querySelector('main'));
    document.body.insertBefore(mapDiv, document.querySelector('.main-content') || document.querySelector('main'));

    if (results.length > 0) {
        try {
            const map = L.map('map').setView([results[0].lat, results[0].lng], 10);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);

            results.forEach(facility => {
                L.marker([facility.lat, facility.lng])
                    .addTo(map)
                    .bindPopup(`<strong>${facility.name}</strong><br>${facility.services}`);
            });
        } catch (e) {
            const errorNote = document.createElement('p');
            errorNote.textContent = "Map could not be loaded.";
            mapDiv.appendChild(errorNote);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query.length > 0) {
                const results = performSearch(query);
                displayResults(results);
            }
        });
    }
});
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});

