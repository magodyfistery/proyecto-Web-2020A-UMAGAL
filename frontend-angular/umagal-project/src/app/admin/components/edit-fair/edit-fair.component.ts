import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ExhibitionService } from 'src/app/core/services/exhibition/exhibition.service';
import { Router } from '@angular/router';
import { UmagalResponse } from 'src/app/core/models/umagal-response.model';

@Component({
  selector: 'app-edit-fair',
  templateUrl: './edit-fair.component.html',
  styleUrls: ['./edit-fair.component.scss']
})
export class EditFairComponent implements OnInit {

  formGroup: FormGroup;

  fair = ExhibitionService.fair

  selectedFile: File = null;
  fd = new FormData();
  image_changed: boolean = false;

  url_last_image: string = ""

  createFormData(event) {
    this.image_changed = true
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('file', this.selectedFile, this.selectedFile.name);
  }


  constructor(
    private formBuilder: FormBuilder,
    private exhibitionService: ExhibitionService,
    private router: Router
  ) {
    this.buildForm();
    this.formGroup.patchValue(ExhibitionService.fair)
  }

  ngOnInit(): void {
  }

  updateFair(event: Event) {
    event.preventDefault();  // evitar recargar la página

    console.log(this.formGroup.value);

    if(this.formGroup.valid){


      if(this.image_changed){
        this.exhibitionService.uploadImage(this.fd)
          .subscribe((umagalResponse: UmagalResponse)=>{

            const url: string = umagalResponse.body.data[0]
            var fair = this.formGroup.value

            this.exhibitionService.updateFair(fair.name, fair.date, fair.description, fair.artists, url)
              .subscribe(response => {
                console.log("updateFair: ", response);
                if(response.body.status == 1){
                  this.router.navigate(['./admin/manage-fairs']);
                }else{
                  alert(response.body.msg)
                }
              });


          })
      }
      else{


        const url: string = ExhibitionService.fair.url_principal_img

        var fair = this.formGroup.value

        this.exhibitionService.updateFair(fair.name, fair.date, fair.description, fair.artists, url)
          .subscribe(response => {
            console.log("updateFair: ", response);
            if(response.body.status == 1){
              this.router.navigate(['./admin/manage-fairs']);
            }else{
              alert(response.body.msg)
            }
          });
      }


    }


  }



  private buildForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],  //es como en el form control
      description: ['', [Validators.required]],
      artists: ['', [Validators.required]]
    });
  }


}
