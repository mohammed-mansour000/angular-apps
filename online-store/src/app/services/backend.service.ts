import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import "firebase/auth";
import { take } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
  private itemCollection: AngularFirestoreCollection<any>;
  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;
  
  userData : any;

  authState: any = null;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) { 
    this.afAuth.authState.subscribe( authState => {
      this.authState = authState;
      console.log(this.authState)
    });

  }

  getSocial(){
    return environment.social;
  }


  //start of auth functions

  login(loginType, formData?){
    //this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    if(formData){ // if direct sign in
      return this.afAuth.signInWithEmailAndPassword(formData.email, formData.password).then((result) => {
        return result;
      }).catch((err) => {
        
      });;
    }else{
      let loginMethod;
      if(loginType=='FB'){ loginMethod = new firebase.auth.FacebookAuthProvider(); }  //facebook login
      if(loginType=='GOOGLE'){ loginMethod = new firebase.auth.GoogleAuthProvider(); }  //google login
      return this.afAuth.signInWithRedirect(loginMethod);
    }
  }

  logout(){
    return this.afAuth.signOut();
  }

  isUserLoggedIn(){
    return this.afAuth.authState;
  }


  redirectLogin(){
    return this.afAuth.getRedirectResult();
  }

  getUser(): Promise<any> {
    return this.afAuth.authState.pipe(take(1)).toPromise();
  }

  getDoc(colUrl: string){
    this.itemDoc = this.afs.doc<any>(colUrl);
    return this.itemDoc.valueChanges();
  }


  isUserAdmin(){
    //let colUrl = !this.isUserLoggedIn() ? 'abcd' : firebase.auth().currentUser.uid;
    //return colUrl;
    

   // let colUrl = !this.isUserLoggedIn() ? 'abcd' : firebase.auth().currentUser.uid;
    let colUrl;
    if( !this.isUserLoggedIn() ){
      colUrl = 'any'
    }else{
      this.getUser().then(auth => { 
          colUrl = "onlinestore/eshtari/admins/"+auth.uid ;
          console.log(colUrl)
          console.log( this.getDoc(colUrl));
        });
    }
  }

   getUid() {
    return firebase.auth().currentUser.uid;
  }

  //end of auth functions

  //start of fake functions

  get timestamp() {
    var d = new Date();
    return d;
    //return firebase.firestore.FieldValue.serverTimestamp();
}

  getCollectionURL(filter){
    return "onlinestore/eshtari/" + filter;
  }

  getCartTotal(): number{
    return 0;
  }

  getUserStatus(): Observable<any>{
    let fakeResponse = true;
    return Observable.create(
      observer =>{
        setTimeout(() => {
          observer.next(fakeResponse);
        }, 2000);
      }
    )
  }

  getDocs(colType){
    this.itemCollection = this.afs.collection<any>(this.getCollectionURL(colType));
    return this.itemCollection.valueChanges();
  }


  getFilterProducts(colType, filters){
    let fakeResponse = [{
      'category' : "test",
      'scategory' : "test",
      'name' : "test",
      'price' : "test",
      'id' : "test"
    }];
    return Observable.create(
      observer =>{
        setTimeout(()=>{
          observer.next(fakeResponse);
        }, 2000);
      }
    )
  }


  setDocs(colType, formData, docId?){
    const id = this.afs.createId(); //if we want to create id for document
    const item = { id, name };
    const timestamp = this.timestamp;
    var docRef = this.afs.collection(this.getCollectionURL(colType)).doc(item.id);
    return docRef.set({
      ...formData,
      id: id,
      updatedAt: timestamp,
      createdAt: timestamp,
      delete_flag: "N",
      username: this.authState.displayName,
      useremail: this.authState.email
    });

  }


  updateProducts(colType, formData){
    let fakeResponse = true;
    return Observable.create(
      observer =>{
        setTimeout(() => {
          observer.next(fakeResponse);
        }, 2000);
      }
    )
  }

  getOneDoc(colType, docId){
    let docUrl = this.getCollectionURL(colType) + "/" +  docId;
    // this.itemDoc = this.afs.doc<any>(docUrl);
    // return this.itemDoc.valueChanges();
    return this.afs.collection(docUrl).doc(docId).valueChanges();
  }


  deleteOneProductDoc(colType, docId){
    let fakeResponse = true;
    return Observable.create(
      observer =>{
        setTimeout(() => {
          observer.next(fakeResponse);
        }, 2000);
      }
    )
  }


  updateShoppingInterest(colType, data){
    let fakeResponse = true;
    return Observable.create(
      observer =>{
        setTimeout(() => {
          observer.next(fakeResponse);
        }, 2000);
      }
    )
  }


  updateShoppingCart(colType, data){
    let fakeResponse = true;
    return Observable.create(
      observer =>{
        setTimeout(() => {
          observer.next(fakeResponse);
        }, 2000);
      }
    )
  }

  //end of fake functions
}
