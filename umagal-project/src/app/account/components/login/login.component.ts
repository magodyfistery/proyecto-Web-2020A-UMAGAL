import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  user_types = [
    "Publico", "Artista"
  ];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  authAndRetrieveUser(event: Event) {
    event.preventDefault();  // evitar recargar la página

    console.log(this.formGroup.value);

    if(this.formGroup.valid){
      const user = this.formGroup.value;

      if(user.login_type == "Publico"){
        this.authService.authAndRetrieveClient(user.username, user.password)
          .subscribe(client => {
            console.log(client);
            this.router.navigate(['./']);
          });
      }
      else if(user.login_type == "Artista"){
        this.authService.authAndRetrieveArtist(user.username, user.password)
          .subscribe(artist => {
            console.log(artist);
            this.router.navigate(['./']);
          });
      }

    }





  }



  private buildForm() {
    this.formGroup = this.formBuilder.group({
      login_type: ['', [Validators.required]],
      username: ['', [Validators.required]],  //es como en el form control
      password: ['', [Validators.required]]
    });
  }



}
