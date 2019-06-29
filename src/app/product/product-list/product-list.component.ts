import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ProductService } from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 public products: any[];

  constructor(private router: Router, private service: ProductService) { }

  ngOnInit() {
    this.products = [
      {
        id: "1",
        name: "I love angular - A comprehensive guide on angular development",
        email: "angular@example.com",
        price: "$29.99"
      },
      {
        id: "2",
        name: "Angular design patterns",
        email: "design@example.com",
        price: "$15.99"
      }
    ];
  }

}