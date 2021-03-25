import { Component, OnInit } from '@angular/core';
import { CitiesListService } from '../services/cities-list.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})

export class PieComponent implements OnInit {

  constructor(public ct: CitiesListService) { }
  
  citiesCopy : any[] = [];

  ngOnInit(): void {
    this.getCities();
    let myChart = new Chart("myChart", {
      type: 'pie',
      data: {
          labels: [
            this.citiesCopy[0].city, 
            this.citiesCopy[1].city, 
            this.citiesCopy[2].city, 
            this.citiesCopy[3].city, 
            this.citiesCopy[4].city
          ],
          datasets: [{
              label: '# of Votes',
              data: [37435191, 29399141, 26317104, 21846507, 21671908],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)'
              ],
              borderWidth: 1
          }]
      }
  });
  }

  getCities(){
    this.citiesCopy = this.ct.getCities();
  }
}
