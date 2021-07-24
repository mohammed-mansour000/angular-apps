import { ProductService } from './../../services/product.service';
import { Product } from './../../interfaces/product.interface';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('image') image :ElementRef;

  errorMessage: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addNewProduct(formValue){
    let data : Product = formValue.value;
    let image = (this.image.nativeElement as HTMLInputElement).files[0];
    console.log(formValue.value);
    console.log((this.image.nativeElement as HTMLInputElement).files[0]);
    this.productService.addProduct(data.name, data.price, image).then(msg => console.log(msg));
  }
}
