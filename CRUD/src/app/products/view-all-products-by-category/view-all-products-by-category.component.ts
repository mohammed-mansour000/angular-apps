import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,  private p:ProductsService) { }

  categoryId=0;
  categoryName = '';
  products : Product;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.categoryId = data.id;
    })

    this.showProductsByCategory(this.categoryId);
    this.getCategory();
  }

  // showProductsByCategory(id:number){
  //   this.p.getProducts().subscribe(data=>{
  //     this.products = data.filter((el)=> {
  //       return el.category == this.categoryId;
  //     });
  //     console.log(this.products);
  //   })
  // }

  showProductsByCategory(id:number){
    this.p.searchByCategory(id).subscribe(data=>{
        this.products = data;
        console.log(this.products);
      });
     
    
  }


  getCategory(){
    this.p.getCategories().subscribe(data=>{
       data.filter((el)=> {
        if(el.id == this.categoryId) {
          console.log(el.name)
          this.categoryName = el.name
        }
         
      });
    })
  }
}
