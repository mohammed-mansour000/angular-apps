import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';

import { Product } from "../product";


@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {

  productsData:Product;

  constructor(private p:ProductsService ) { }

  ngOnInit(): void {
    this.getProductsData();
  }

getProductsData(){
  this.p.getProducts().subscribe((data)=>{
    this.productsData = data;
    console.log(this.productsData)
  });
}

}
