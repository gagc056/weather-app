import _ from 'lodash';
import './main.css';
const { Store } = require('./Store');
const { Weather } = require('./Weather');
const { UI } = require('./UI');

const storage = new Store();
const {city, countryCode}= storage.getLocationData();
const weather = new Weather(city, countryCode);


const ui = new UI();

require('./main.css');

async function fetchWeather() {
  const data = await weather.getWeather()
  ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const countryCode = document.getElementById('Code').value
  weather.changeLocation(city, Code);
  storage.setLocationData(city, Code);
  fetchWeather();

});

document.addEventListener('DOMContentLoaded', fetchWeather);