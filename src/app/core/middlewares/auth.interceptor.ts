import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log(request.url);
    const token: string = localStorage.getItem('token');
    request.clone().headers.append('Authorization', token);
    request.clone().headers.append('Content-Type', 'application/json');
    return next.handle(request);
  }
}
