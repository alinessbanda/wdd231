const url = 'data/members.json';
const cardsContainer = document.querySelector('#members-container');
const gridBtn = document.querySelector('#grid-view');
const listBtn = document.querySelector('#list-view');

async function getMemberData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error("Error fetching member data:", error);
    }
}

function displayMembers(members) {
    cardsContainer.innerHTML = ''; // Clear existing content
    members.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('member-card');

        card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p class="level">Membership: ${getLevelName(member.membership)}</p>
    `;

        cardsContainer.appendChild(card);
    });
}

function getLevelName(level) {
    return level === 3 ? "Gold" : level === 2 ? "Silver" : "Member";
}

// Toggle layout
gridBtn.addEventListener('click', () => {
    cardsContainer.classList.add('grid');
    cardsContainer.classList.remove('list');
});

listBtn.addEventListener('click', () => {
    cardsContainer.classList.add('list');
    cardsContainer.classList.remove('grid');
});

getMemberData();
