import { Component, OnInit } from '@angular/core';
import { Artwork } from '../../../core/models/artwork';
import { ArtworkService} from "../../../core/services/artwork/artwork.service";
import { ArtworkUpService } from "../../../core/services/artwork/artwork-up.service";
import { FormsModule, NgForm }   from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  constructor(
    private _projectService:ArtworkService,
    private _uploadService:ArtworkUpService
    ) { 
      this.title="Crear proyecto";
      this.project=new Artwork('','','','',2020,'','');
      this.url='http://localhost:3000/api/';
    }

  ngOnInit(): void {
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
              form.reset();
            });
          }else{
            this.saveProject=response.project;
            this.status='success';
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

  fileChangeEvent(fileInput:any){
    //realizamos un cast forzado, todos los archivos que seleccionamos en el input
    this.filesToUpload=<Array<File>>fileInput.target.files;
  }

}
