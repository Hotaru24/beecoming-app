import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesListService {

  constructor() { }

  cities : any[] = [];

  addCities(form : any){
    this.cities = [form, ...this.cities]
    console.log(this.cities)
  }

  getCities(){
    return this.cities;
  }
}
