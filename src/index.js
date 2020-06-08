import Store from './Store';
import Weather from './Weather';
import UI from './UI';
import './main.css';

const storage = new Store();
const city = storage.getLocationData();
const weather = new Weather(city);
const ui = new UI();


async function fetchWeather() {
  const data = await weather.getWeather();
  ui.render(data);
}

document.getElementById('change-city-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  weather.changeLocation(city);
  storage.setLocationData(city);
  fetchWeather(city);
});
document.addEventListener('DOMContentLoaded', fetchWeather);
