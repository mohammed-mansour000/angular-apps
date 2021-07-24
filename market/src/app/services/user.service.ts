import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore, private authService: AuthService) { }

  addNewUser(uid, username, address, isAdmin?){ //add a new user in cloudfirestore and give him uid we got from authentication
    return this.afs.doc('users/' + uid).set({ username, address , isAdmin});
  }

  getUserData(){
    return this.afs.doc("users/" + this.authService.userId).valueChanges();
  }
}
