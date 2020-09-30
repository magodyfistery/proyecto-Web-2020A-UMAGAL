import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UmagalResponse } from '../../models/umagal-response.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }


  addRequestToContact(form_contact: any){
    return this.http.post<UmagalResponse>(environment.url_api + '/contact/request', form_contact);
  }
}
