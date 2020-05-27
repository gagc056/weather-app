export default class Weather {
  constructor(city) {
    this.apiKey = '71b7b9bac33a91c886ef4beb1850df5c';
    this.city = city;
  }

  async getWeather() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`;
    const response = await fetch(URI);
    const data = await response.json();
    return data;
  }

  changeLocation(city) {
    this.city = city;
  }
}
