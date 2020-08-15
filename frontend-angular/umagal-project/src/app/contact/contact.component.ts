import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { ContactService } from '../core/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formGroup: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private contactService: ContactService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  addRequestToContact(event: Event) {
    event.preventDefault();  // evitar recargar la página

    console.log(this.formGroup.value);

    if(this.formGroup.valid){

      var request_contact = this.formGroup.value
      request_contact.contact_phone = ""+request_contact.contact_phone

      this.contactService.addRequestToContact(request_contact)
        .subscribe(response => {
          console.log("addRequestToContact: ", response);
          if(response.body.status == 1){
            this.router.navigate(['./']);
          }
          alert(response.body.msg)
        });

    }


  }



  private buildForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],  //es como en el form control
      contact_phone: ['', [Validators.required]]
    });
  }


}
