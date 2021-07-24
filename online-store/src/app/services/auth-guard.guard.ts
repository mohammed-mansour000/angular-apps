import { BackendService } from './backend.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  // constructor(public afAuth: AngularFireAuth, private router: Router){  }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return Observable.create(this.afAuth.authState).take(1)
  //   .map(state => !!state)
  //   .do(authenticated =>{
  //     if(!authenticated)
  //     this.router.navigate(['/login']);
  //   });
  // }

  constructor (private _backendService: BackendService, private _router: Router) { }
  async canActivate(): Promise<boolean> {
      const authenticatedUser = await this._backendService.getUser();
      const authenticated = !!authenticatedUser;
      if (!authenticated) {
        this._router.navigate(['/login']);
      }
      return authenticated;
    }
  
}
