import { Category } from './../../models/category';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandler } from 'src/app/shared/error-handler';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryUrl = `http://localhost:3000/categories`

  constructor(private http: HttpClient) { }

  private errorHandler: ErrorHandler = new ErrorHandler();



  getCategory(): Observable<Category[]>{
    try {
      return this.http.get<Category[]>(this.categoryUrl);
    } catch (error) {
      //this.errorHandler.handleError(error);
      throw(error);
    }
  }



  getCategoryById(categoryId: number): Observable<Category>{
    try {
      const urlCategoryById = `${this.categoryUrl}/${categoryId}`;
      return this.http.get<Category>(urlCategoryById);
    } catch (error) {
      //this.errorHandler.handleError(error);
      throw(error);
    }
  }



  createCategory(createCategoryDto: any): Observable<Category>{
    try {
      return this.http.post<Category>(this.categoryUrl, createCategoryDto);
    } catch (error) {
      //this.errorHandler.handleError(error);
      throw(error);
    }
  }



  updateCategory(categoryId: number, updateCategoryDto: any): Observable<void>{
    try {
      const urlCategoryById = `${this.categoryUrl}/${categoryId}`;
      return this.http.put<void>(urlCategoryById, updateCategoryDto);
    } catch (error) {
      //this.errorHandler.handleError(error);
      throw(error);
    }
  }



  updateProduct(categoryId: number,productId: number,  updateProductDto: any): Observable<void>{
    try {
      const urlCategoryProductById = `${this.categoryUrl}/${categoryId}/product/${productId}`;
      return this.http.put<void>(urlCategoryProductById, updateProductDto);
    } catch (error) {
      //this.errorHandler.handleError(error);
      throw(error);
    }
  }



  
  deleteCategory(categoryId: number): Observable<any>{
    try {
      const urlCategoryById = `${this.categoryUrl}/${categoryId}`;
      return this.http.delete<any>(urlCategoryById);
    } catch (error) {
      //this.errorHandler.handleError(error);
      throw(error);
    }
  }




  deleteProduct(categoryId: number, productId: number): Observable<void>{
    try {
      const urlCategoryProductById = `${this.categoryUrl}/${categoryId}/product/${productId}`;
      return this.http.delete<void>(urlCategoryProductById);
    } catch (error) {
      //this.errorHandler.handleError(error);
      throw(error);
    }
  }




  addProduct(categoryId: number, createProductDto: any): Observable<void>{
    try {
      const urlCategoryById = `${this.categoryUrl}/products`;
      return  this.http.put<void>(urlCategoryById, createProductDto);
    } catch (error) {
       //this.errorHandler.handleError(error);
       throw(error);
    }
  }



  getCategoryProducts(id: number): Observable<Product[]>{
    try {
      const urlCategoryById = `${this.categoryUrl}/products/${id}`;
      return  this.http.get<Product[]>(urlCategoryById);
    } catch (error) {
       //this.errorHandler.handleError(error);
       throw(error);
    }
  }
}
