import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  req!: HttpRequest<any>;
  authenticationUrl = 'https://accounts.spotify.com/api/token';
  token$!: Observable<string>;
  accessToken!: string | null;

  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.accessToken = localStorage.getItem('accessToken');

    if (req.url === this.authenticationUrl) {
      this.req = req.clone({
        setHeaders: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: environment.basic_token,
        },
      });
      return next.handle(this.req);
    }

    return next.handle(
      req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.accessToken,
          'Content-Type': 'application/json',
        },
      })
    );
  }
}
