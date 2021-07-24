import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  
  isAdmin: boolean = false;

  constructor(private router: Router, private authService: AuthService){  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    this.authService.user.subscribe(user =>{
      if(user) { 
        this.authService.userId = user.uid; 
        this.authService.isAdmin(user.uid).subscribe((res):any => {
         console.log(res.payload.data()["isAdmin"])
          if(!res.payload.data()["isAdmin"]) { this.router.navigate(['home']) }
          //else{ this.router.navigate(['home']) }
        })
      }
    });
    return true;
  }
  
}
