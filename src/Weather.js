export class Weather {
  
  constructor(city, Code) {
    this.apiKey = 'f56dca24ce05c3835045624436d6a8e8';
    this.city = city;
    this.Code = Code;
  }

  async getWeather() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.Code}&appid=${this.apiKey}&units=metric`;
    const response = await fetch(URI);
    const data = await response.json();
    return data;
  }

  changeLocation(city, Code) {
    this.city = city;
    this.Code = Code;
  }

}
