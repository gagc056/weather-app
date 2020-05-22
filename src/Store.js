export default class Store {
  constructor() {
    this.city;
    this.defaultCity = 'Montevideo';
    this.defaultCountry = 'Uruguay';
  }

  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }
    return {
      city: this.city,
    }
  }

  setLocationData(city, Code) {
    localStorage.setItem('city', city);
    localStorage.setItem('Code', Code);
  }

}
