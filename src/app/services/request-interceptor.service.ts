import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {KeycloakServiceService} from './keycloak-service.service';

@Injectable({
  providedIn: 'root'
})

export class RequestInterceptorService implements HttpInterceptor{

  constructor(private keycloakService: KeycloakServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.keycloakService.kc.authenticated) { return next.handle(req); }
    const request = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.keycloakService.kc.token
      }
    });
    return next.handle(request);
  }
}
