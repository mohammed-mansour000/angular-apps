import { AuthGuardGuard } from './services/auth-guard.guard';
import { AuthAdminGuardGuard } from './services/auth-admin-guard.guard';
import { LoginComponent } from './user/login/login.component';
import { ProductComponent } from './user/product/product.component';
import { AdminTabComponent } from './admin/admin-tab/admin-tab.component';
import { SetProductComponent } from './admin/set-product/set-product.component';
import { SettingsComponent } from './settings/settings.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuardGuard] },
  { path: 'admin', component: AdminTabComponent, canActivate: [AuthAdminGuardGuard] },
  { path: 'product', component: ProductComponent,  canActivate: [AuthGuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
