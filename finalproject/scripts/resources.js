const container = document.querySelector('#resources-container');

fetch('data/resources.json')
  .then(response => response.json())
  .then(data => {
    data.forEach((item) => {
      const card = document.createElement('div');
      card.classList.add('resource-card');

      card.innerHTML = `
        ${item.image ? `<img src="${item.image}" alt="${item.name} logo" loading="lazy">` : ''}
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        ${item.link ? `<a href="${item.link}" target="_blank" class="btn">Learn more about ${item.name}</a>` : ''}
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading resources:", error);
    container.innerHTML = `<p>Resources could not be loaded at this time.</p>`;
  });
