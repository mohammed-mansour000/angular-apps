import { Shopping } from './../../interfaces/shopping.interface';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts: Shopping[] = [];
  total = 0;

  constructor(private cartSerivce: CartService) { }

  ngOnInit(): void {
    //get all carts
    this.cartSerivce.getCart().subscribe(res => {
      this.carts = res.map(e =>{
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          price: e.payload.doc.data()['price'],
          quantity: e.payload.doc.data()['quantity']
        }
      });
    },
    err => console.log(err)
    );
  }

  delete(id){
    console.log(id);
   if(confirm("Are You Sure ?")){
    this.cartSerivce.deleteFromCart(id).then((result) => {
      alert("item deleted");  
    }).catch((err) => {
      console.log(err);
    });
   }
  }

  save(id, newQuantity){
    console.log(newQuantity);
    this.cartSerivce.updateCart(id, newQuantity).then((result) => {
      alert("Your Order Updated !" );
    }).catch((err) => {
      console.log(err);
    });
  }

}
