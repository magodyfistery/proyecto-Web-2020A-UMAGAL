import { Component, OnInit } from '@angular/core';
import { Artwork } from '../../../core/models/artwork';
import { ArtworkService} from "../../../core/services/artwork/artwork.service";
import { ArtworkUpService } from "../../../core/services/artwork/artwork-up.service";
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-table-artwork',
  templateUrl: './table-artwork.component.html',
  styleUrls: ['./table-artwork.component.scss'],
  providers:[ArtworkService]
})
export class TableArtworkComponent implements OnInit {

  public projects:Artwork[];
  public url:string;
  filterPost = '';
  user = '';
  constructor(private _router:Router,
    private _authService: AuthService,
    private _projectService:ArtworkService
    ) { 
      this.url='http://localhost:3000/api/';
     }

  ngOnInit(): void {
    this.getProjects()
    this.user = this._authService.getLoggedIn()['_id']
    console.log(this.user)
  } 
  compara(artist):Boolean{
    return this.user == artist
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
  deleteProject(id){
    this._projectService.deleteProject(id).subscribe(
      response=>{
        if(response.project){
          // this._router.navigate(['../artist/tableArtwork']);   
          this.getProjects()       
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
