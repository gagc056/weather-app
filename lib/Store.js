export default class Store {
  constructor() {
    this.city = null;
    this.defaultCity = 'Montevideo';
  }

  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    return this.city;
  }

  setLocationData(city) {
    this.city = city;
    localStorage.setItem('city', city);
  }

}