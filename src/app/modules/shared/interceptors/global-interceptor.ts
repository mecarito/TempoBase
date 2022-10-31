import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MemoizedSelector, Store } from '@ngrx/store';
import { selectAccessToken } from '../store/selectors/selectors';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  req!: HttpRequest<any>;
  authenticationUrl = 'https://accounts.spotify.com/api/token';
  token$!: Observable<string>;
  token!: string;

  constructor(private store: Store) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.token$ = this.store.select(selectAccessToken as any);
    this.token$.subscribe((val) => (this.token = val));

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
          Authorization: 'Bearer' + this.token,
        },
      })
    );
  }
}
