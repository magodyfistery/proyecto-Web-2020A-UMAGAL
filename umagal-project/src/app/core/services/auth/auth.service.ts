import { Injectable } from '@angular/core';
import { Artist } from '../../models/artist.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Client } from '../../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


  authAndRetrieveArtist(username: string, password: string){
    return this.http.post<Artist>(environment.url_api + '/auth_artist', {
      username: username, password: password
    });
  }

  authAndRetrieveClient(username: string, password: string){
    return this.http.post<Client>(environment.url_api + '/auth_client', {
      username: username, password: password
    });
  }
}
