import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UmagalResponse } from '../../models/umagal-response.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(
    private http: HttpClient
  ) { }

  getVideos(){
    return this.http.get<UmagalResponse>(environment.url_api + '/videos');
  }
}
