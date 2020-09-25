import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UmagalResponse } from '../../models/umagal-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {

  static fair = {
    name: "",
    date: "",
    description: "",
    artists: "",
    url_principal_img: ""
  }

  constructor(
    private http: HttpClient
  ) { }



  uploadImage(file) {
    return this.http.post<UmagalResponse>(environment.url_api + '/exhibition/upload_image', file);
  }


  getFairFromYear(year: number){
    return this.http.get<UmagalResponse>(environment.url_api + '/exhibition/fairs/'+year);
  }

  getFairs(){
    return this.http.get<UmagalResponse>(environment.url_api + '/exhibition/fairs/');
  }

  deleteFair(name: string){
    return this.http.post<UmagalResponse>(environment.url_api + '/exhibition/fairs/delete',
    {
      name: name
    });
  }

  addFair(name: string, date: string, description: string, artists: string, url_principal_img: string){
    return this.http.post<UmagalResponse>(environment.url_api + '/exhibition/fairs/add',
    {
      name: name, date: date, description: description, artists: artists, is_fair: true, url_principal_img: url_principal_img
    });
  }

  updateFair(name: string, date: string, description: string, artists: string, url_principal_img: string){
    return this.http.post<UmagalResponse>(environment.url_api + '/exhibition/fairs/update',
    {
      name: name, date: date, description: description, artists: artists, is_fair: true, url_principal_img:url_principal_img
    });
  }


  getValidYears() {
    return this.http.get<UmagalResponse>(environment.url_api + '/exhibition/get_valid_years');
  }
}
