
document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


document.querySelectorAll('.card').forEach((card, index) => {
  card.addEventListener('click', () => {
    alert('You selected: ' + card.querySelector('.card-title').textContent);
  });
});
function searchResource() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  
  if (query.includes('diabetes') || query.includes('blood pressure') || query.includes('mental health')) {
    window.location.href = 'educational_material.html';
  } 
  else if (query.includes('telemedicine') || query.includes('virtual') || query.includes('online doctor')) {
    window.location.href = 'telemedicine_guides.html';
  } 
  else if (query.includes('support') || query.includes('help') || query.includes('external')) {
    window.location.href = 'external_support.html';
  } 
  else {
    alert('No matching resources found. Try searching for "diabetes", "telemedicine", or "support".');
  }
}
document.getElementById('hamburgerMenu').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('show');
});
