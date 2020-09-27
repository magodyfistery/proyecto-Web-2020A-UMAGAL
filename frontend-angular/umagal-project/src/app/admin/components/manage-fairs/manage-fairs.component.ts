import { Component, OnInit } from '@angular/core';
import { Exhibition } from 'src/app/core/models/exhibition.model';
import { ExhibitionService } from 'src/app/core/services/exhibition/exhibition.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-fairs',
  templateUrl: './manage-fairs.component.html',
  styleUrls: ['./manage-fairs.component.scss']
})
export class ManageFairsComponent implements OnInit {

  exhibitions : Exhibition[];
  displayedColumns: string[] = ['name', 'date', 'url_principal_img', 'artists', 'description', 'actions'];

  constructor(
    private exhibitionService: ExhibitionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchFairs();
  }

  fetchFairs() {
    this.exhibitionService.getFairs()
    .subscribe(response => {
      console.log(response)
      if(response.body.status == 1){
        if(response.body.data.length > 0){
          this.exhibitions = response.body.data;
        }else{
          alert("No hay ferias de ese año")
        }
          // pueden venir muchas ferias
      }

    });
  }

  editFair(fair) {
    ExhibitionService.fair= fair

    this.router.navigate(['/admin/edit-fair'])
  }

  deleteFair(name: string) {

    this.exhibitionService.deleteFair(name)
      .subscribe(response => {

        var index: number = 0;
        this.exhibitions.forEach(p => {

          if(p.name == name){
            this.exhibitions.splice(index, 1);
            this.exhibitions = this.exhibitions;
          }else{
            index++;
          }
        });

        console.log(response);
        this.fetchFairs();
      });
  }

}
