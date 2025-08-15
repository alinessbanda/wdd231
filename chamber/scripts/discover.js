const container = document.querySelector('.discover-grid');

fetch('data/discover.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (!Array.isArray(data) || data.length !== 8) {
            console.warn("Warning: JSON does not contain exactly 8 items!");
        }

        data.forEach((item, index) => {
            const card = document.createElement('section');
            card.classList.add('card');
            card.id = `card${index + 1}`;

            card.innerHTML = `
        <h3>${item.title}</h3>
        <figure>
          <img src="${item.image}" alt="${item.title}" loading="lazy">
        </figure>
        <div class="card-content">
          <p>${item.description}</p>
          <address>${item.address}</address>
          <button>Learn More</button>
        </div>
      `;

            container.appendChild(card);
        });
    })
    .catch(err => console.error('Error fetching JSON:', err));

