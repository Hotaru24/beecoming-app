import { Component, OnInit } from '@angular/core';
import { CitiesListService } from '../services/cities-list.service';

import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(public ct: CitiesListService) { }

  citiesCopy : any[] = [];

  ngOnInit(): void {
    this.getCities();
    const myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], 2);
    
    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(myfrugalmap);

    L.marker([this.citiesCopy[0].latitude, this.citiesCopy[0].longitude], {icon: myIcon}).bindPopup(this.citiesCopy[0].city).addTo(myfrugalmap).openPopup();
    L.marker([this.citiesCopy[1].latitude, this.citiesCopy[1].longitude], {icon: myIcon}).bindPopup(this.citiesCopy[1].city).addTo(myfrugalmap).openPopup();
    L.marker([this.citiesCopy[2].latitude, this.citiesCopy[2].longitude], {icon: myIcon}).bindPopup(this.citiesCopy[2].city).addTo(myfrugalmap).openPopup();
    L.marker([this.citiesCopy[3].latitude, this.citiesCopy[3].longitude], {icon: myIcon}).bindPopup(this.citiesCopy[3].city).addTo(myfrugalmap).openPopup();
    L.marker([this.citiesCopy[4].latitude, this.citiesCopy[4].longitude], {icon: myIcon}).bindPopup(this.citiesCopy[4].city).addTo(myfrugalmap).openPopup();
  };

  getCities(){
    this.citiesCopy = this.ct.getCities();
  } 

}