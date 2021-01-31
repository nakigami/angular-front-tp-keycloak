import { Component, OnInit } from '@angular/core';
import {SupplierService} from '../services/supplier.service';
import {KeycloakServiceService} from '../services/keycloak-service.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})

export class SuppliersComponent implements OnInit {

  suppliers: any;
  forbidden: string;

  constructor(private supplierService: SupplierService,
              public keycloakService: KeycloakServiceService ) { }

  ngOnInit(): void {
    this.supplierService
      .getSuppliers()
      .subscribe((data) => {
        this.suppliers = data;
      }, (err) => {
        this.forbidden = err.error.message;
      });
  }
}
