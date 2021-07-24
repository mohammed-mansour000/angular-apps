import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private p:ProductsService, private location : Location) { }

  id=0;
  
  product:Product;
  
  alert:boolean = false;

  ngOnInit(): void {

    console.log(this.activatedRoute.snapshot.params.id);

    this.activatedRoute.params.subscribe(data=>{
      console.log(data.id);
      this.id = data.id;
    });

    this.showProduct(this.id);
  }

  showProduct(id:number){
    this.p.viewProduct(id).subscribe(data=>{
      this.product = data;
      console.log(this.product);
    })
  }

  deleteProduct(id:number){
    if(confirm("Do you really want to delete?"))
    {
      this.p.deleteProduct(id).subscribe(result=>{
        console.log("product deleted");
        console.log(result);
        this.alert = true;
       // alert("product deleted!!");
        this.location.back();
      })
    }
  }

  closeAlert(){
    this.alert = false;
  }


}
