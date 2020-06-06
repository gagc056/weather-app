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
      this.string.innerHTML = `<p id='temp'>${weather.main.temp}°C</p><button data-metric="C" data-value="${weather.main.temp}" id='changeMetric'>°F </button>`;
      this.wind.textContent = `Wind:${weather.wind.speed}m/s`;
      this.humidity.textContent = `Humidity: ${weather.main.humidity} °C`;

      document.getElementById('changeMetric').addEventListener('click', e => {
        if (e.target.getAttribute('data-metric') === 'C') {
          e.target.setAttribute('data-metric', 'F');
          const value = e.target.getAttribute('data-value');
          const temp = Math.floor((value * 9) / 5 + 32);
          e.target.setAttribute('data-value', temp);
          this.string.querySelector('#temp').textContent = `${Math.floor((temp * 9) / 5 + 32)}°F`;
          e.target.textContent = 'C';
        } else {
          e.target.setAttribute('data-metric', 'C');
          const value = e.target.getAttribute('data-value');
          const temp = Math.floor((value - 32) * (5 / 9));
          e.target.setAttribute('data-value', temp);
          this.string.querySelector('#temp').textContent = `${temp}°C`;
          e.target.textContent = 'F';
        }
      });
    }
  }
}