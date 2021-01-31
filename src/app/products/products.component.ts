import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
  constructor() { }

  ngOnInit(): void {
    this.products = [
      {
        id: 1, name: 'MAcBook pro 2018', price: 2800
      },
      {
        id: 2, name: 'Imprimante HP 220', price: 2800
      },
      {
        id: 3, name: 'Iphone Xs Max 2018', price: 1500
      }
    ];
  }

}
