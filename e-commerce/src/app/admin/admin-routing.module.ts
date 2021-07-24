import { UserResolverService } from './../resolvers/user-resolver.service';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageCategoriesComponent } from './components/manage-categories/manage-categories.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { CategoryResolverService } from '../resolvers/category-resolver.service';
import { AdminAuthGuard } from '../guards/admin-auth.guard';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AdminAuthGuard]
      },
      {
        path: 'management',
        children: [
          {
            path: 'manage-categories',
            component: ManageCategoriesComponent,
            resolve: {
              categories: CategoryResolverService
            },
            canActivate: [AdminAuthGuard] 
          },
          {
            path: 'manage-users',
            component: ManageUsersComponent,
            resolve: {
              allUsers: UserResolverService
            },
            canActivate: [AdminAuthGuard] 
          },
          {
            path: 'manage-orders',
            component: ManageOrdersComponent,
            canActivate: [AdminAuthGuard]
          },
        ]
      },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
