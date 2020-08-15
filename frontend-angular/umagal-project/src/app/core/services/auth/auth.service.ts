import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UmagalResponse } from '../../models/umagal-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;


  constructor(
    private http: HttpClient
  ) {
    this.user = null;
  }


  authAndRetrieveArtist(username: string, password: string){
    return this.http.post<UmagalResponse>(environment.url_api + '/user/auth_artist', {
      username: username, password: password
    });
  }

  authAndRetrieveClient(username: string, password: string){
    return this.http.post<UmagalResponse>(environment.url_api + '/user/auth_client', {
      username: username, password: password
    });
  }

  isLoggedIn(): boolean{
    this.user = JSON.parse(localStorage.getItem("user"));
    return this.user != null && this.user != undefined;
  }

  setCookieLogginUser(user: any) {
    localStorage.setItem("user", JSON.stringify(user))
    // console.log(JSON.parse(localStorage.getItem("user")))
  }

  logOut() {
    localStorage.removeItem("user")
    this.user = null
  }
}
