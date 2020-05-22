export default class UI {

  constructor() {
    this.location = document.getElementById('weather-location');
    this.desc = document.getElementById('weather-description');
    this.wind = document.getElementById('weather-wind');
    this.humidity = document.getElementById('weather-humidity');
    this.string = document.getElementById('weather-string');
  }

  render(weather) {
    console.log(weather);
    this.location.textContent = weather.name + ' / ' + weather.sys.country;
    this.desc.textContent = weather.weather[0]['description'];
    this.string.textContent = weather.temp + ' °C';
    this.wind.textContent = 'Wind'+ ' m/s'
  }

}
