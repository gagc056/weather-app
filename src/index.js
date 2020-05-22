const {Store} = require ('./Store');
const {Weather} = require ('./Weather');
const {UI} = require ('./UI');

const storage = new Store();
const {city}= storage.getLocationData();
const weather = new Weather(city);

const ui = new UI();

require('./main.css');


async function fetchWeather() {
  const data = await weather.getWeather()
  ui.render(data);
}

document.getElementById('change-city-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  weather.changeLocation(city);
  storage.setLocationData(city);
  fetchWeather();

});

document.addEventListener('DOMContentLoaded', fetchWeather);