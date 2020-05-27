export default class UI {
  constructor() {
    this.location = document.getElementById('weather-location');
    this.desc = document.getElementById('weather-description');
    this.string = document.getElementById('weather-string');
    this.wind = document.getElementById('weather-wind');
    this.humidity = document.getElementById('weather-humidity');
  }

  render(weather) {
    console.log(weather);
    this.location.textContent = `${weather.name}  `;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${weather.main.temp} °C`;
    this.wind.textContent = `Wind:${weather.wind.speed}m/s`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity} °C`;
  }
}
