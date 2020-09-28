import { Component, OnInit } from '@angular/core';
import { Artwork } from '../../../core/models/artwork';
import { ArtworkService} from "../../../core/services/artwork/artwork.service";
import { ArtworkUpService } from "../../../core/services/artwork/artwork-up.service";
import { AuthService } from 'src/app/core/services/auth/auth.service';

import { Router, ActivatedRoute, Params } from '@angular/router';


interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-creat-artwork',
  templateUrl: './creat-artwork.component.html',
  styleUrls: ['./creat-artwork.component.scss']
})
export class CreatArtworkComponent implements OnInit {
  public title:string;
  public project:Artwork;
  public saveProject;
  public status:string;
  public filesToUpload:Array<File>;
  public url:string;
  photoSelected: string | ArrayBuffer;
  file: File;
  constructor(
    private _router:Router,
    private _authService: AuthService,
    private _projectService:ArtworkService,
    private _uploadService:ArtworkUpService
    ) { 
      this.title="Información de tu Obra";
      this.project=new Artwork('','','','',2020,'','');
      this.url='http://localhost:3000/api/';
    }

  ngOnInit(): void {
    this.project.username = this._authService.getLoggedIn()['name']
    this.project.id_artist = this._authService.getLoggedIn()['_id']
  }

  

  //guardar los datos
  onSubmit(form){
    this._projectService.saveProject(this.project).subscribe(
      response=>{
        if(response.project){
          //subir la imagen
          if(this.filesToUpload){
            this._uploadService.makeFileRequest(this.url+"upload-image/"+response.project._id,[],this.filesToUpload,'image')
            .then((result:any)=>{
              this.saveProject=result.project;
              this.status='success';
              console.log(result);
              this.ngOnInit()
              this._router.navigate(['../../artist/tableArtwork']);
              // form.reset();
            });
          }else{
            this.saveProject=response.project;
            this.status='success';
            this._router.navigate(['../../artist/tableArtwork']);
            form.reset();
          }
        }else{
          this.status='failed';
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
    
  }

  onPhotoSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
      this.filesToUpload = <Array<File>>event.target.files;
    }
  }

  fileChangeEvent(fileInput:any){
    //realizamos un cast forzado, todos los archivos que seleccionamos en el input
    this.filesToUpload=<Array<File>>fileInput.target.files;
  }

}
