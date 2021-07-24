import { category } from './../templates/category';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Product } from "./product";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  urlProducts = " http://localhost:3000/products";
  urlCategory = " http://localhost:3000/categories";

  getProducts(): Observable<Product>{
    return this.http.get<Product>(this.urlProducts);
  }

  createProduct(productToBeCreated): Observable<Product>{
    return this.http.post<Product>(this.urlProducts, productToBeCreated); //return an observable
  }

  viewProduct(productId:number): Observable<Product>{
    return this.http.get<Product>(`${this.urlProducts}/${productId}`);
  }

  updateProduct(productId:number, productToBeUpdated): Observable<Product>{
    return this.http.put<Product>(`${this.urlProducts}/${productId}`, productToBeUpdated);
  }

  deleteProduct(productId:number): Observable<Product>{
    return this.http.delete<Product>(`${this.urlProducts}/${productId}`);
  }

  searchByCategory(categoryIdParam): Observable<Product>{
    return this.http.get<Product>(`${this.urlProducts}?category=${categoryIdParam}`);
  }

  searchByDate(dateParam): Observable<Product>{
    return this.http.get<Product>(`${this.urlProducts}?date=${dateParam}`);
  }

  //for categories
  getCategories(): Observable<category>{
    return this.http.get<category>(this.urlCategory);
  }
}
