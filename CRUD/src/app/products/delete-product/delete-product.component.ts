import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private p:ProductsService) { }

  id=0;

  alert:boolean = false;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      console.log(data.id);
      this.id = data.id;
    });
    this.deleteProduct(this.id)
  }

  deleteProduct(id:number){
    if(confirm("Do you really want to delete?"))
    {
      this.p.deleteProduct(id).subscribe(result=>{
        console.log("product deleted");
        this.alert = true;
      })
    }
  }

  closeAlert(){
    this.alert = false;
  }

}
