import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  req!: HttpRequest<any>;
  authenticationUrl = 'https://accounts.spotify.com/api/token';
  authorizationUrl = 'https://accounts.spotify.com/authorize';

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url === this.authorizationUrl) {
        this.req = req.clone({
            setParams: {
            client_id: environment.client_id,
            response_type: 'code',
            redirect_uri: environment.redirect_url,        
            scope: environment.authorization_scopes
          },
        });
        return next.handle(this.req)
    }

    if (req.url === this.authenticationUrl) {
      this.req = req.clone({
        setHeaders: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: environment.client_id
        },
        setParams: {},
      });
      return next.handle(this.req);
    }
    return next.handle(req);
  }
}
