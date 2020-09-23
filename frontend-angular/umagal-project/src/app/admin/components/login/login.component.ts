import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Encrypt } from 'src/app/utils/encrypt';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    if(this.authService.isAdminLoggedIn()){
      this.router.navigate(['./admin/manage-fairs']);
    }
  }

  authAndRetrieveAdmin(event: Event) {
    event.preventDefault();  // evitar recargar la página

    console.log(this.formGroup.value);

    if(this.formGroup.valid){
      const user = this.formGroup.value;

      this.authService.authAndRetrieveAdmin(user.username, Encrypt.encryptPasswordWithSHA256(user.password))
        .subscribe(response => {
          console.log("authAndRetrieveAdmin: ", response);
          if(response.body.status == 1){
            this.authService.setCookieLogginAdmin(response.body.data[0]);
            this.router.navigate(['./admin/manage-fairs']);
          }
          alert(response.body.msg)
        });

    }

  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      username: ['', [Validators.required]],  //es como en el form control
      password: ['', [Validators.required]]
    });
  }

}
