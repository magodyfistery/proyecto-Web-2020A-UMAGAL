import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { Encrypt } from 'src/app/utils/encrypt';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  registerClient(event: Event) {
    event.preventDefault();  // evitar recargar la página

    console.log(this.formGroup.value);

    if(this.formGroup.valid){
      const user = this.formGroup.value;

      this.authService.registerClient(
        user.username, Encrypt.encryptPasswordWithSHA256(user.password),
          user.name, user.date_of_birth, user.address, "" + user.contact_phone
      )
        .subscribe(response => {
          console.log("registerClient: ", response);
          if(response.body.status == 1){
            this.authService.setCookieLogginUser(user);

            this.router.navigate(['./']);
          }
          alert(response.body.msg)
        });

    }





  }



  private buildForm() {
    this.formGroup = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      name: ['', [Validators.required]],
      date_of_birth: ['', [Validators.required]],
      address: ['', [Validators.required]],
      contact_phone: ['', [Validators.required]]
    });
  }

}
