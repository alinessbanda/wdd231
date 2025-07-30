const spotlightContainer = document.getElementById('spotlight-container');

async function loadSpotlights() {
    const response = await fetch('data/members.json');
    const data = await response.json();

    const goldSilver = data.filter(member => member.membership === 2 || member.membership === 3);

    const shuffled = goldSilver.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3); // 2 or 3 depending on layout

    selected.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card');
        card.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/${member.image}" alt="${member.name} logo">
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership:</strong> ${member.membership === 3 ? "Gold" : "Silver"}</p>
        `;
        spotlightContainer.appendChild(card);
    });
}

loadSpotlights();
