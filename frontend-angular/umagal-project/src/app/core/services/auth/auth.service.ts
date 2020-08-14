import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UmagalResponse } from '../../models/umagal-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


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
}
