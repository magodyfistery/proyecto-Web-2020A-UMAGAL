import { Component, OnInit } from '@angular/core';
import { Exhibition } from 'src/app/core/models/exhibition.model';
import { ExhibitionService } from 'src/app/core/services/exhibition/exhibition.service';
import { UmagalResponse } from 'src/app/core/models/umagal-response.model';

@Component({
  selector: 'app-fair',
  templateUrl: './fair.component.html',
  styleUrls: ['./fair.component.scss']
})
export class FairComponent implements OnInit {

  years = [
    "2020", "2019", "2018", "2017", "2016", "2015", "2014"
  ]

  fair: Exhibition;

  constructor(
    private exhibitionService: ExhibitionService
  ) { }

  ngOnInit(): void {
      this.getFairs(2020);  // año por defecto
      this.getAvailableYears()
  }

  getAvailableYears() {
    this.exhibitionService.getValidYears()
      .subscribe((umagalResponse: UmagalResponse)=>{
        console.log(umagalResponse)
          this.years = umagalResponse.body.data;

      })
  }

  changeYear(year: number) {
    this.getFairs(year);
  }

  getFairs(year: number) {
    this.exhibitionService.getFairFromYear(year)
      .subscribe(response => {
        console.log(response)
        if(response.body.status == 1){
          if(response.body.data.length > 0){
            this.fair = response.body.data[0];
          }else{
            alert("No hay ferias de ese año")
          }
            // pueden venir muchas ferias
        }

      });
  }

}
