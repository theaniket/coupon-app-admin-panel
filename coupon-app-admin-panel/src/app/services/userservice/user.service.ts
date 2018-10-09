import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Urls} from '../../configs/urls/urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private url: Urls) { }

  verifyUser(data: any): Observable<any> {
    return this.http.post(this.url.userSignIn, data);
  }
}
