import { Component, OnInit } from '@angular/core';

import { Artwork } from "../../../core/models/artwork";
import { ArtworkService } from '../../../core/services/artwork/artwork.service';

import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-view-artwork',
  templateUrl: './view-artwork.component.html',
  styleUrls: ['./view-artwork.component.scss']
})
export class ViewArtworkComponent implements OnInit {


  public url:string;
  public project:Artwork;
  public confirm:boolean;

  constructor(
    private _projectService:ArtworkService,
    private _router:Router,
    private _route:ActivatedRoute
  ) {
    this.url='http://localhost:3000/api/';
    this.confirm=false;
   }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id=params.id;
      this.getProject(id);
    });
  }

  getProject(id){
    this._projectService.getProject(id).subscribe(
      response=>{
        this.project=response.project;
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  setConfirm(confirm){
    this.confirm=confirm;
  }

  deleteProject(id){
    this._projectService.deleteProject(id).subscribe(
      response=>{
        if(response.project){
          this._router.navigate(['../../artist/listArtwork']);
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
