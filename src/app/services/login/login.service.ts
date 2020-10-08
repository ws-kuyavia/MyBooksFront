import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public jwtUrl = environment.authUrl + 'login';

  constructor(private http: HttpClient) {

  }

  login(data): Observable<any> {
    return this.http.post<any>(this.jwtUrl, data.toObject(), httpOptions);
  }

}
