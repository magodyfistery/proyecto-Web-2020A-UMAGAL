import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logged_in: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.logged_in = this.authService.isLoggedIn();
    console.log("Está logeado: ", this.logged_in)
  }

  logOut() {
    this.authService.logOut();
    this.logged_in = false;
    this.router.navigate(['./']);
  }
}
