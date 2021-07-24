import { AuthService } from './../services/auth/auth.service';
import { CartService } from './../services/cart/cart.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Cart } from '../models/cart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartResolverService implements Resolve<Cart>{

  constructor(private cartService: CartService, private authService: AuthService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cart> {
    if(this.authService.profile){
      return this.cartService.getCart(this.authService.profile.cartId as number);
     }
     return this.cartService.getCart(0);
  }


}
