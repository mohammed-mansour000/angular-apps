import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor( private authService: AuthService, private router: Router ){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

   // check if is logged and is admin   
   if(this.authService.isLoggedIn() && this.authService.currentUser && this.authService.currentUser.isAdmin){
      return true;
    }else{
      this.router.navigate(['/auth/login'],{
        queryParams: { returnUrl: state.url }
      });
      return false;
    }
  }
  
}
