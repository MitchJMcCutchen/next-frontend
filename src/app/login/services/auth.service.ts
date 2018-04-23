import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from 'selenium-webdriver/http';

import { environment } from './../../../environments/environment';


@Injectable()
export class AuthService {

  public API_URL: string = environment.backendURL + '/api/v1';

  constructor(
    private http: HttpClient
  ) { }

  login(body): Observable<any> {
    return this.http.post(this.API_URL + `/users/login`, body, {
      observe: 'response'
    });
  }

  signUp(body): Observable<any> {
    return this.http.post(this.API_URL + `/users`, body, {
      observe: 'response'
    });
  }

  logout(): Observable<any> {
    return this.http.delete(this.API_URL + `/users/logout`);
  }

  isAuthenticated() {
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    } else {
      return false;
    }
  }

}
