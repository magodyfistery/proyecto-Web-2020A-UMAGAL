import { Component, OnInit } from '@angular/core';
import { PhotoGallery } from 'src/app/core/models/photo-gallery.model';

import { Artwork } from "../../../core/models/artwork";
import { ArtworkService } from '../../../core/services/artwork/artwork.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-list-artwork',
  templateUrl: './list-artwork.component.html',
  styleUrls: ['./list-artwork.component.scss'],
  providers:[ArtworkService],
  animations: [
    trigger('photosAnimation', [
      transition('* => *', [
        query('img',style({ transform: 'translateX(-100%)'})),
        query('img',
          stagger('600ms', [
            animate('900ms', style({ transform: 'translateX(0)'}))
        ]))
      ])
    ])
  ]

})
export class ListArtworkComponent implements OnInit {
  ngOnInit(): void {
    
  }

  public projects = [];
  public url:string;

  constructor(
    private _projectService:ArtworkService
  ) {
    this.url='http://localhost:3000/api/';
	this.getProjects();
  }


  getProjects(){
    this._projectService.getProjects().subscribe(
      response=>{
		  console.log(response)
        if(response.projects){
          this.projects=response.projects;
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
