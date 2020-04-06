export class Store {
  constructor() {
    this.city;
    this.Code;
    this.defaultCity = 'Montevideo';
    this.defaultCountry = 'Uruguay';
  }

  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }
    if (localStorage.getItem('Code') === null) {
      this.Code = this.defaultCountry;
    } else {
      this.Code = localStorage.getItem('Code');
    }
    return {
      city: this.city,
      Code: this.Code
    }
  }

  setLocationData(city, Code) {
    localStorage.setItem('city', city);
    localStorage.setItem('Code', Code);
  }

}
