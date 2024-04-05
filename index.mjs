// index.mjs

import { fetchWeatherData } from './weatherAPI.mjs';
import { isValidInput } from './inputValidation.mjs';

// Get DOM elements
const locationInput = document.getElementById('locationInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherInfo = document.getElementById('weatherInfo');

async function getWeather() {
    const location = locationInput.value.trim();
    if (!isValidInput(location)) {
        weatherInfo.textContent = 'Please enter a valid location';
        weatherInfo.classList.add('alert-danger');
        weatherInfo.classList.remove('alert-info');
        weatherInfo.style.display = 'block';
        return;
    }

    try {
        const weatherData = await fetchWeatherData(location);
        displayWeather(weatherData);
    } catch (error) {
        weatherInfo.textContent = 'Failed to fetch weather data. Please try again later.';
        weatherInfo.classList.add('alert-danger');
        weatherInfo.classList.remove('alert-info');
        weatherInfo.style.display = 'block';
        console.error(error.message);
    }
}

function displayWeather(weatherData) {
    // Display weather data in the UI
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;
    const cityName = weatherData.name;
    const country = weatherData.sys.country;
    weatherInfo.innerHTML = `
        <h3>Weather in ${cityName}, ${country}</h3>
        <p><strong>Temperature:</strong> ${temperature}°C</p>
        <p><strong>Description:</strong> ${description}</p>
    `;
    weatherInfo.classList.remove('alert-danger');
    weatherInfo.classList.add('alert-info');
    weatherInfo.style.display = 'block';
}

getWeatherBtn.addEventListener('click', getWeather);
