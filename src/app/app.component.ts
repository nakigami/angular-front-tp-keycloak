import {Component, OnInit} from '@angular/core';
import {KeycloakServiceService} from './services/keycloak-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularFrontKeyclockTp';
  isAdmin: boolean;

  constructor(public keycloakService: KeycloakServiceService) {

  }

  ngOnInit(): void {
    this.isAdmin = this.keycloakService.kc.hasRealmRole('data-manager');
  }

  login()
  {
    this.keycloakService.kc.login();
  }

  changePassword()
  {
    this.keycloakService.kc.accountManagement();
  }

  logout()
  {
    this.keycloakService.kc.logout();
  }
}
