const apiKey = "d9db36804d5a75a4169a55f979b67d2e";
const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=Lusaka&appid=${apiKey}&units=metric`;

async function fetchWeather() {
    try {
        const response = await fetch(weatherURL);
        const data = await response.json();

        const current = data.list[0];
        const weatherInfo = document.getElementById("weather-info");

        weatherInfo.innerHTML = `
            <p>🌡️ <strong>Temp:</strong> ${current.main.temp}°C</p>
            <p>🌥️ <strong>Conditions:</strong> ${current.weather[0].description}</p>
            <h3>3-Day Forecast</h3>
            <ul>
                ${[8, 16, 24].map(i => {
            const day = data.list[i];
            const date = new Date(day.dt_txt).toLocaleDateString('en-ZM', { weekday: 'long' });
            return `<li><strong>${date}:</strong> ${day.main.temp}°C, ${day.weather[0].main}</li>`;
        }).join('')}
            </ul>
        `;
    } catch (err) {
        document.getElementById("weather-info").innerHTML = `<p>Unable to fetch weather data.</p>`;
        console.error(err);
    }
}

fetchWeather();
