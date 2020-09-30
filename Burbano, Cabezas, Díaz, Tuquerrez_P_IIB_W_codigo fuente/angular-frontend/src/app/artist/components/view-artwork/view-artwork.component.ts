import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Artwork } from "../../../core/models/artwork";
import { ArtworkService } from '../../../core/services/artwork/artwork.service';

import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-view-artwork',
  templateUrl: './view-artwork.component.html',
  styleUrls: ['./view-artwork.component.scss']
})
export class ViewArtworkComponent implements OnInit {
  // public get authService(): AuthService {
  //   return this._authService;
  // }
  // public set authService(value: AuthService) {
  //   this._authService = value;
  // }


  public url:string;
  public project:Artwork;
  public confirm:boolean;
  
  constructor(    
    private _authService: AuthService,
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

  getAcces():Boolean{
    this._authService.getLoggedIn()
    return this._authService.isLoggedIn()
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
