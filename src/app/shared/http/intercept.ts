import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Header } from './model/header';

@Injectable()
export class Intercept implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (httpRequest.headers.get('noHeader')) {
      const cloneReq = httpRequest.clone({
        headers: httpRequest.headers.delete('noHeader')
      });
      return next.handle(cloneReq);
    }

    const headers: Header = {
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    };

    return next.handle(httpRequest.clone({ setHeaders: { ...headers } }));
  }
}
