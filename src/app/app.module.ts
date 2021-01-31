import {APP_INITIALIZER, ApplicationRef, DoBootstrap, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import {KeycloakServiceService} from './services/keycloak-service.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RequestInterceptorService} from './services/request-interceptor.service';

/*export function kcFactory(kcSecService: KeycloakServiceService)
{
  return () => kcSecService.init();
}*/

const keyCloakService = new KeycloakServiceService();

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SuppliersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: KeycloakServiceService, useValue: keyCloakService},
    /*{provide: APP_INITIALIZER, deps: [KeycloakServiceService], useFactory: kcFactory, multi: true},*/
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true}
  ],
  /*bootstrap: [AppComponent]*/
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap{
  ngDoBootstrap(appRef: ApplicationRef): void {
    keyCloakService.init()
      .then(() => {
        console.log('Keycloak Success...');
        appRef.bootstrap(AppComponent);
      })
      .catch((err) => {
        console.log('Keycloak error ', err);
      });
  }
}

