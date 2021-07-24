import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import "firebase/auth";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;//observable of user 
  userId: string = '';

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user = afAuth.user;
   }

  signup(email, password){
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  login(email, password){
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signout(){
    return this.afAuth.signOut();
  }

  isAdmin(uid){ //my function
    return this.afs.doc(`users/${uid}`).snapshotChanges();
  }
}
