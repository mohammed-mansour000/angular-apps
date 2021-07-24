import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authStateV: any = null;
  error;

  constructor(
    private af: AngularFireAuth,
    private router: Router
    ) { 
      this.af.authState.subscribe(auth =>{
        this.authStateV = auth;
      })
     }

   registerWithFirebase(email: string, password: string){
     //function from firebase that register new user
     //note that email should be valid, and password should be 6 characters
    return this.af.createUserWithEmailAndPassword(email, password).then((user)=>{
      this.authStateV = user;
    }).catch(error =>{
      console.log(error);
      this.error =error;
    });
   }  

   loginWithFirebase(email: string, password: string){
     //function from firebase that login new user
    return this.af.signInWithEmailAndPassword(email, password).then((user)=>{
      this.authStateV = user;
    }).catch(error =>{
      console.log(error);
    });
   }  

   logout(){  //sign out function from firebase 
     this.af.signOut(); 
     this.router.navigate(['/login']);
   }


   get isUserAnonymousLoggedIn(): boolean{
    return (this.authStateV !== null) ? this.authStateV.isAnonymous : false;
   }

   get currentUserId(): string{
     return (this.authStateV !== null) ? this.authStateV.uid : '';
   }

   get currentUserEmail(): any{
     return this.authStateV['email'];
   }
 
   get currentUser(): string{
     return (this.authStateV !== null) ? this.authStateV : null;
   }

   get isUserEmailLoggedIn(): boolean{
     if((this.authStateV !== null) && (!this.isUserAnonymousLoggedIn)){
      return true;
     }else{
       return false
     }
   }
   
}
