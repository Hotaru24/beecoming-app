import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesListService {

  constructor() { }

  cities : any[] = [
    {
      city: "Tokyo",​​
      country: "Japan",
​​      currency: "yen",
​​      language: "japanese",
​​      population: "37435191",
      latitude: "35.69",
      longitude: "139.69"
    },
    {
      city: "Delhi",​​
      country: "India",
​​      currency: "rupee",
​​      language: "hindi",
​​      population: "29399141",
      latitude: "28.61",
      longitude: "77.23"
    },
    {
      city: "Shanghai",​​
      country: "China",
​​      currency: "yuan",
​​      language: "chinese",
​​      population: "26317104",
      latitude: "31.228611",
      longitude: "121.474722"
    },
    {
      city: "Sao Paulo",​​
      country: "Brazil",
​​      currency: "real",
​​      language: "portuguese",
​​      population: "21846507",
      latitude: "-23.55",
      longitude: "-46.633333"
    },
    {
      city: "Mexico City",​​
      country: "Mexico",
​​      currency: "peso",
​​      language: "spanish",
​​      population: "21671908",
      latitude: "19.433333",
      longitude: "-99.133333"
    }
  ];

  addCities(form : any){
    this.cities = [...this.cities, form]
    console.log(this.cities)
  }

  getCities(){
    return this.cities;
  }
}
