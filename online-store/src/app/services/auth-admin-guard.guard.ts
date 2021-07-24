import { take, map } from 'rxjs/operators';
import { BackendService } from './backend.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuardGuard implements CanActivate {

  constructor(private backendService: BackendService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return this.backendService.isUserAdmin()
    // .take(1)
    // .map(res => {
    //   if(res){
    //     return res.isAdmin
    // }
    // else{
    //   return false;
    // }
    // ).do(isAdmin => {
    //   console.log(isAdmin)
    //   return true;
    // });
    return true;
  }
  
}
