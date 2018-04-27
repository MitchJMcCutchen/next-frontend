import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { IMyBook } from './../interfaces/IMyBook.interface';

@Injectable()
export class BookService {

  public API_URL: string = environment.backendURL + '/api/v1';

  constructor(
    private http: HttpClient
  ) { }

  getMyBooks(): Observable<any> {
    return this.http.get(`${this.API_URL}/booklist`);
  }

  searchBooks(search): Observable<any> {
    return this.http.get(`${this.API_URL}/books/search/${search}`);
  }

}
