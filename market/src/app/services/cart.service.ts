import { Product } from './../interfaces/product.interface';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //injected authservice to get user uid
  constructor(private afs: AngularFirestore, private authService: AuthService) { }

  addToCart(product){
    return this.afs.collection(`users/${this.authService.userId}/cart`).add(product);
  }

  getCart(){
    return this.afs.collection(`users/${this.authService.userId}/cart`).snapshotChanges();
  }

  deleteFromCart(id){
    return this.afs.doc(`users/${this.authService.userId}/cart/${id}`).delete();
  }

  updateCart(id, newQuantity){
    return this.afs.doc(`users/${this.authService.userId}/cart/${id}`).update({ quantity: newQuantity });
  }
}
