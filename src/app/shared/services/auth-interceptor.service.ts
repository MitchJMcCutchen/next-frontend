import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {

      const token = localStorage.getItem('token');

      if (token) {
        const cloned = req.clone({
          headers: req.headers.set('x-auth', token)
        });

        return next.handle(cloned);
      } else {
        return next.handle(req);
      }
  }

}
