import { ContactComponent } from './components/contact/contact.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { UserAuthGuard } from './guards/user-auth.guard';
import { CategoryResolverService } from './resolvers/category-resolver.service';
import { ProductResolverService } from './resolvers/product-resolver.service';
import { CartResolverService } from './resolvers/cart-resolver.service';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Resolve } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProfileResolverService } from './resolvers/profile-resolver.service';

const routes: Routes = [
  { 
    path: 'home',
    component: HomeComponent, 
  },
  { 
    path: 'profile',
    component: ProfileComponent, 
    // resolve: {
    //   profile: ProfileResolverService
    // },
    // canActivate: [UserAuthGuard]
  },
  { 
    path: 'orders',
    component: OrderComponent,
    canActivate: [UserAuthGuard] 
  },
  { 
    path: 'cart',
    component: CartComponent, 
    canActivate: [UserAuthGuard]
  },
  { 
    path: 'auth',
    children: [
      { 
        path: 'login',
        component: LoginComponent, 
      },
      { 
        path: 'register',
        component: RegisterComponent, 
      },
    ] 
  },
  { 
    path: 'products',
    component: ProductListComponent, 
    resolve: {
      products: ProductResolverService
    }
  },
  { 
    path: 'products/:id',
    component: ProductDetailsComponent, 
  },
  { 
    path: 'categories',
    component: CategoryListComponent,
    resolve: {
      categories: CategoryResolverService
    } 
  },
  { 
    path: 'categories/:id',
    component: CategoryDetailsComponent, 
  },
  { 
    path: 'contact',
    component: ContactComponent, 
  },
  { 
    path: 'admin',
    loadChildren: () => import('././admin/admin.module').then(a => a.AdminModule),
    canActivate: [AdminAuthGuard]
  },
  { 
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  { 
    path: '**',
    component: PageNotFoundComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
