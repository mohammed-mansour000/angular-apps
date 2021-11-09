import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(public afAuth: AngularFireAuth) { }


  signin(email, password){
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signup(email, password){
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  googleAuth(){
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  signout(){
    return this.afAuth.signOut();
  }

}
