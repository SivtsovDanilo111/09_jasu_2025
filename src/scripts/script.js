// filepath: /website-project/website-project/src/scripts/script.js
document.addEventListener('DOMContentLoaded', () => {
  fetch('https://jasu2025.eu/innovation-complete-list.php')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Assuming the data is in JSON format
    })
    .then(data => {
      displayData(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

  function displayData(data) {
    const container = document.createElement('div');
    container.className = 'card-container';

    data.forEach(item => {
      const card = createCard(item);
      container.appendChild(card);
    });

    document.body.appendChild(container);
  }

  function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';

    const title = document.createElement('h2');
    title.textContent = item.title; // Adjust according to the actual data structure
    card.appendChild(title);

    const description = document.createElement('p');
    description.textContent = item.description; // Adjust according to the actual data structure
    card.appendChild(description);

    return card;
  }
});