import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from './../../services/cart.service';
import { ProductService } from './../../services/product.service';
import { Product } from './../../interfaces/product.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  products : Product[] = [];
  add: number = -1;
  productObservable: Subscription;

  loading: boolean = false;

  constructor(
              private productService: ProductService,
              private cartService: CartService, 
              private authService: AuthService,
              private router: Router
              ) { }


  ngOnInit(): void {
    this.loading = true;
    this.productObservable = this.productService.getAllProducts().subscribe(res =>{
        this.loading = false;
        console.log(res)
        this.products = res.map(e =>{
                                      return {
                                        id: e.payload.doc.id,
                                        name: e.payload.doc.data()['name'],
                                        price: e.payload.doc.data()['price'],
                                        photoUrl: e.payload.doc.data()['photoUrl']

                                      } as Product;
                                    });
        console.log(this.products)
      });
  }

  addToCart(index: number){
    if(!this.authService.userId)
      this.router.navigate(['/login'])
    else 
      this.add = +index;
  }

  buy(quantity: number){
    let selectedProduct = this.products[this.add];
    let orderedProduct = {
      name: selectedProduct.name,
      quantity: +quantity,
      price: selectedProduct.price
    }
    console.log(orderedProduct);
    this.cartService.addToCart(orderedProduct).then((result) => {
      this.add = -1;
    }).catch((err) => {
      console.log(err);
    });
  }

  //to save memory we have to unsubscribe
  ngOnDestroy(): void { // ondestroy means on leaving the component
    this.productObservable.unsubscribe();
  }
}
