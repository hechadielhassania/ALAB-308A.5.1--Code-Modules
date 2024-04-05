// weatherAPI.js

const API_KEY = 'b5f558462160da78810acd0bb997a9fd';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function fetchWeatherData(location) {
    try {
        const response = await fetch(`${BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch weather data. Please try again later.');
    }
}

export { fetchWeatherData };