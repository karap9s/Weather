import axios from 'axios';

export const fetchCity = async () => {
  return axios.get(
    'http://api.openweathermap.org/geo/1.0/direct?q=Санкт-Петербург&limit=5&appid=ed873789c6fbde8447e25e7d471f6f1f'
  );
};

export const fetchWeather = async (lat: number, lon: number) => {
  return axios.get(
    `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=1586468027&appid=ed873789c6fbde8447e25e7d471f6f1f`
  );
};

export const fetchOpenWeather = async (lat: number, lon: number) => {
  return axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&current_weather=true`
  );
};