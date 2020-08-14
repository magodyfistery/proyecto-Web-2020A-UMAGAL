import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logged_in: boolean;

  constructor() { }

  ngOnInit(): void {

    this.logged_in = false;
  }

  logOut() {
    console.log("Cerrando sesión");
  }
}
