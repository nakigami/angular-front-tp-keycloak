import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {KeycloakServiceService} from './keycloak-service.service';

@Injectable({
  providedIn: 'root'
})

export class SupplierService {

  constructor(private http: HttpClient, private keycloakService: KeycloakServiceService) { }

  public getSuppliers()
  {
    return this.http.get('http://localhost:8084/suppliers');
  }
}
