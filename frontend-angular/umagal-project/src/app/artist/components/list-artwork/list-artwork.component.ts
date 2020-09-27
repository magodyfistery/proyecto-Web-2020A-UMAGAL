import { Component, OnInit } from '@angular/core';
import { PhotoGallery } from 'src/app/core/models/photo-gallery.model';

import { Artwork } from "../../../core/models/artwork";
import { ArtworkService } from '../../../core/services/artwork/artwork.service';


@Component({
  selector: 'app-list-artwork',
  templateUrl: './list-artwork.component.html',
  styleUrls: ['./list-artwork.component.scss'],
  providers:[ArtworkService]
})
export class ListArtworkComponent implements OnInit {

  public projects:Artwork[];
  public url:string;

  constructor(
    private _projectService:ArtworkService
  ) { 
    this.url='http://localhost:3000/api/';
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      response=>{
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
