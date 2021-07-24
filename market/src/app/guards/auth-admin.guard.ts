import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise(resolve => {
        this.authService.user.subscribe(user => {
          if(user) {
            this.authService.isAdmin(user.uid).subscribe((res):any => {
              console.log(res.payload.data()["isAdmin"])
               if( res.payload.data()["isAdmin"] ) { resolve(true); }
               else { this.router.navigate(['/login']); resolve(false); }
             })
          }
          else { this.router.navigate(['/login']); resolve(false); }
        })
      });
  }
  
}
