const container = document.querySelector('.discover-grid');

fetch('data/discover.json')
    .then(response => response.json())
    .then(data => {
        data.forEach((item, index) => {
            const card = document.createElement('section');
            card.classList.add('card');
            card.id = `card${index + 1}`; // Ensures correct grid-area mapping

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
    });

