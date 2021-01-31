import { Injectable } from '@angular/core';
import {KeycloakInstance} from 'keycloak-js';
import {HttpClient} from '@angular/common/http';

declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})

export class KeycloakServiceService {
  public kc: KeycloakInstance;

  constructor(private http?: HttpClient) {}

  public init(){
    return new Promise((resolve, reject) => {
      console.log('Test Initialisation');
      this.kc = new Keycloak({
        url: 'http://localhost:8080/auth',
        realm: 'keyclock-tp',
        clientId: 'angular-front-keycloak-tp'
      });

      this.kc.init({
        onLoad: 'check-sso'
      }).then((authenticated) => {
        console.log(authenticated);
        console.log(this.kc.token);
        resolve(authenticated);
      }).catch(err => {
        reject(err);
      });
      console.log(this.kc.token);
    });

  }
}
