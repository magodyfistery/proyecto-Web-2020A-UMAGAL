import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UmagalResponse } from '../../models/umagal-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {

  constructor(
    private http: HttpClient
  ) { }


  getFairFromYear(year: number){
    return this.http.get<UmagalResponse>(environment.url_api + '/exhibition/fairs/'+year);
  }

  getExhibitions(){
    return this.http.get<UmagalResponse>(environment.url_api + '/exhibition');
  }
  
}
