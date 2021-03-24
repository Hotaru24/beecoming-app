import { Component, OnInit } from '@angular/core';
import { CitiesListService } from '../services/cities-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public ct: CitiesListService) { }

  citiesCopy : any[] = [];

  ngOnInit(): void {
    this.getCities();
  }

  addCity(form : any){
    this.ct.addCities(form.value);
    form.reset();
  }

  getCities(){
    this.citiesCopy = this.ct.getCities();
  }

}
