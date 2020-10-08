import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpHandler} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class ApiConsumerService extends HttpClient {
  public baseUrl: string;
  public token: string;
  public jwtHelper: JwtHelperService;

  public constructor(handler: HttpHandler) {
    super(handler);
    this.baseUrl = environment.baseUrl;
    this.jwtHelper = new JwtHelperService();
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  unsetToken(): void {
    localStorage.removeItem('token');
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.getToken()}`
    });
  }

  public get(url: string, options?: any): Observable<any> {
    url = this.baseUrl + url;
    const headers = this.getHeaders();
    let data = options;
    data = {...data, headers};

    return super.get(url, data);
  }

  public post(url: string, data: any, options?: any): Observable<any> {
    url = this.baseUrl + url;
    const headers = this.getHeaders();
    let optionsData;
    if (options) {
      optionsData = {options, headers};
    } else {
      optionsData = {headers};
    }

    return super.post(url, data, optionsData);
  }

  public put(url: string, data: any, options?: any): Observable<any> {
    url = this.baseUrl + url;
    const headers = this.getHeaders();
    let optionsData;
    if (options) {
      optionsData = {options, headers};
    } else {
      optionsData = {headers};
    }

    return super.put(url, data, optionsData);
  }
  public delete(url: string, data: any, options?: any): Observable<any> {
    url = this.baseUrl + url;
    const headers = this.getHeaders();
    let optionsData;
    if (options) {
      optionsData = {options, headers};
    } else {
      optionsData = {headers};
    }

    return super.delete(url, optionsData);
  }
}
