import { Component, OnInit } from '@angular/core';
import { Exhibition } from 'src/app/core/models/exhibition.model';
import { ExhibitionService } from 'src/app/core/services/exhibition/exhibition.service';
import { UmagalResponse } from 'src/app/core/models/umagal-response.model';

@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.scss']
})
export class ExhibitionComponent implements OnInit {

 
  fair: Exhibition;

  constructor(
    private exhibitionService: ExhibitionService
  ) { }

  ngOnInit(): void {
  }

}
