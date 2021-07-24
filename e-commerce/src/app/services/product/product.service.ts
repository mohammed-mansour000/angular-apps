import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ErrorHandler } from 'src/app/shared/error-handler';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = `http://localhost:3000/products`

  constructor(private http: HttpClient) { }

  private errorHandler: ErrorHandler = new ErrorHandler();



  getProducts(): Observable<Product[]>{
    try {
      return this.http.get<Product[]>(this.productUrl);
    } catch (error) {
      //this.errorHandler.handleError(error);
      throw(error);
    }
  }




  getProductById(id: number): Observable<Product>{
    try {
      const urlById = `${this.productUrl}/${id}`;
      return this.http.get<Product>(urlById);
    } catch (error) {
      //this.errorHandler.handleError(error);
      throw(error);
    }
  }



  
  insertToCart(id: number, cartItemId: number, cartQuantity: number): Observable<Product>{
    try {
      const queryParams = new HttpParams().set('quantity', cartQuantity.toString()); // put querys in url
      const urlById = `${this.productUrl}/${id}/addToCart/${cartItemId}`;
      return this.http.post<Product>(urlById, null, {params: queryParams}); // since no body to send, we put null
    } catch (error) {
      //this.errorHandler.handleError(error);
      throw(error);
    }
  }




  updateProductCartQuantity(id: number, cartQuantity: number): Observable<void>{
    try {
      const queryParams = new HttpParams().set('cartQuantity', cartQuantity.toString()); // put querys in url
      const urlById = `${this.productUrl}/${id}/update-quantity`;
      return this.http.patch<void>(urlById, null, {params: queryParams}); // use patch for partial modification
    } catch (error) {
      //this.errorHandler.handleError(error);
      throw(error);
    }
  }



}
