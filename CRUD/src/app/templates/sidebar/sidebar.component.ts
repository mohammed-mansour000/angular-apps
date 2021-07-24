import { ProductsService } from './../../products/products.service';
import { Component, OnInit } from '@angular/core';

import { category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categories: category;

  constructor(private p: ProductsService) { }

  ngOnInit(): void {
    this.getCategoryData();
  }

  getCategoryData(){
    this.p.getCategories().subscribe(data=>{
      this.categories = data;
      console.log(this.categories);
    })
  }

}
