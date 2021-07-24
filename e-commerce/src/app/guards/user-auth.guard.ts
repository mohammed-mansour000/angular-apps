import { AuthService } from './../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {

  constructor( private authService: AuthService, private router: Router ){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // check if logged   
    if(this.authService.isLoggedIn() && this.authService.currentUser){
      return true;
    }else{
      this.router.navigate(['/auth/login'],{
        queryParams: { returnUrl: state.url }
      });
      return false;
    }
  }
  
}
