const container = document.querySelector('#stories-container');

fetch('data/stories.json')
  .then(response => response.json())
  .then(data => {
    container.innerHTML = '';

    data.forEach((item, index) => {
      const card = document.createElement('div');
      card.classList.add('story-card');
      card.id = `story${index + 1}`;

      const imageSrc = item.image && item.image.trim() !== ''
        ? item.image
        : 'images/placeholder.jpg';

      // Create the image with fixed width/height to prevent layout shifts
      const img = document.createElement('img');
      img.src = imageSrc;
      img.alt = item.name;
      img.loading = "lazy";
      img.width = 400;   // fixed width
      img.height = 200;  // fixed height
      img.style.objectFit = "cover"; // maintain aspect ratio

      const contentDiv = document.createElement('div');
      contentDiv.classList.add('story-card-content');
      contentDiv.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.story}</p>
      `;

      card.appendChild(img);
      card.appendChild(contentDiv);
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading stories:", error);
    container.innerHTML = `<p>Stories could not be loaded at this time.</p>`;
  });