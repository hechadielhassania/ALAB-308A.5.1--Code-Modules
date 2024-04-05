// weatherAPI.js

const API_KEY = '20f7db2cc1f454e7a35adb57515fee51';
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
        console.error(error);
        throw new Error('Failed to fetch weather data');
    }
}

export { fetchWeatherData };
