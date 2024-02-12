const weatherInfo = document.getElementById('weatherInfo');
weatherInfo.classList.add('hide')
function getWeather() {
    const apiKey = 'a8a81765da423e45dcd48f531dd49c5d';
    const cityInput = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.classList.add('hide')
    if (cityInput.trim() === '') {
        alert('Please enter a city');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            const weatherHtml = `<p>City: ${cityName}</p>
                                 <p>Temperature: ${temperature}°C</p>
                                 <p>Description: ${description}</p>`;

            weatherInfo.innerHTML = weatherHtml;
            weatherInfo.classList.remove('hide')
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = '<p>Unable to fetch weather data</p>';
        });
}
