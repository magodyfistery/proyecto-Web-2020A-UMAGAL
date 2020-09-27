import { Component, OnInit } from '@angular/core';

import { Artwork } from "../../../core/models/artwork";
import { ArtworkService } from '../../../core/services/artwork/artwork.service';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-artwork',
  templateUrl: './edit-artwork.component.html',
  styleUrls: ['./edit-artwork.component.scss']
})
export class EditArtworkComponent implements OnInit {

  public url:string;
  public project:Artwork;
  public confirm:boolean;

  public title:string;
  public saveProject;
  public status:string;
  public filesToUpload:Array<File>;
  

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
  
  onSubmit(form){
    this._projectService.updateProject(this.project).subscribe(
      response=>{
        if(response.project){         
            this.saveProject=response.project;
            this.status='success';
            form.reset();          
            this._router.navigate(['../../artist/listArtwork']);
        }else{
          this.status='failed';
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
