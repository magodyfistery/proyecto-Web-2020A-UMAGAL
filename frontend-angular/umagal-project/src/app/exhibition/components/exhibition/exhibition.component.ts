import { Component, OnInit } from '@angular/core';
import { ExhibitionService } from 'src/app/core/services/exhibition/exhibition.service';
import { Exhibition } from 'src/app/core/models/exhibition.model';


@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.scss']
})
export class ExhibitionComponent implements OnInit {

  
  exhibiciones : Array<Exhibition>
  constructor(
    private exhibitionService: ExhibitionService

  ) { }

  ngOnInit(): void {
    this.getExhibitions()
  }

  getExhibitions() {
    this.exhibitionService.getExhibitions()
      .subscribe(response => {
        console.log(response)
        if(response.body.status == 1){
          if(response.body.data.length > 0){
            this.exhibiciones = response.body.data;
            console.log(this.exhibiciones)
          }else{
            alert("No hay ferias de ese año")
          }
            // pueden venir muchas ferias
        }

      });
  }
}
