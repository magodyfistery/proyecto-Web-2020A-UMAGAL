import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ExhibitionService } from 'src/app/core/services/exhibition/exhibition.service';
import { UmagalResponse } from 'src/app/core/models/umagal-response.model';

@Component({
  selector: 'app-create-fair',
  templateUrl: './create-fair.component.html',
  styleUrls: ['./create-fair.component.scss']
})
export class CreateFairComponent implements OnInit {

  formGroup: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private exhibitionService: ExhibitionService,
    private router: Router
  ) {
    this.buildForm();
  }

  selectedFile: File = null;
    fd = new FormData();

    createFormData(event) {
      this.selectedFile = <File>event.target.files[0];
      this.fd.append('file', this.selectedFile, this.selectedFile.name);
    }



  ngOnInit(): void {
  }



  addFair(event: Event) {


    event.preventDefault();  // evitar recargar la página

    console.log(this.formGroup.value);

    if(this.formGroup.valid){

      this.exhibitionService.uploadImage(this.fd)
        .subscribe((umagalResponse: UmagalResponse)=>{

          const url: string = umagalResponse.body.data[0]
          var fair = this.formGroup.value

          this.exhibitionService.addFair(fair.name, fair.date, fair.description, fair.artists, url)
            .subscribe(response => {
              console.log("addFair: ", response);
              if(response.body != null && response.body != undefined){
                this.router.navigate(['./admin/manage-fairs']);
              }else{
                alert(response.body.msg)
              }
            });

        })



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
