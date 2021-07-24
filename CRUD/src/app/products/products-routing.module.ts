import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';

const routes: Routes = [
                  { path: '', component: ViewAllProductsComponent },
                  { path: 'create-product', component: CreateProductComponent },
                  { path: 'delete-product/:id', component: DeleteProductComponent },
                  { path: 'update-product/:id', component: UpdateProductComponent },
                  { path: 'view-product/:id', component: ViewProductComponent },
                  { path: 'list-products', component: ViewAllProductsComponent },
                  { path: 'category/:id', component: ViewAllProductsByCategoryComponent },
                  { path: 'search-date', component: ViewAllProductsByDateComponent },
                ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
