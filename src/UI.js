export default class UI {
  constructor() {
    this.icon = document.getElementById('icon');
    this.location = document.getElementById('weather-location');
    this.description = document.getElementById('weather-description');
    this.string = document.getElementById('weather-string');
    this.wind = document.getElementById('weather-wind');
    this.humidity = document.getElementById('weather-humidity');
  }

  render(weather) {
    if (weather.cod === '404') {
      this.location.textContent = 'city not found';
    } else {
      this.location.textContent = `${weather.name}  `;
      this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png `);
      this.description.textContent = weather.weather[0].description;
      this.string.textContent = `${weather.main.temp}°C`;
      this.wind.textContent = `Wind:${weather.wind.speed}m/s`;
      this.humidity.textContent = `Humidity: ${weather.main.humidity} °C`;
    }
  }
}