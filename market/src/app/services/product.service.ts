import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { }

  getAllProducts(){
    return this.afs.collection("products").snapshotChanges();// if we are using valuesChanges() we dont need to map the result
  }

  addProduct(name: string, price: number, image: File) {
    //in order to insert an image we need to inject storage from angularfirestore
    //in order to catch a promise after a successfull inserting of data, we need to return Promise

    return new Promise((resolve, reject) => {
      let ref = this.storage.ref("products/" + image.name);
        ref.put(image).then(res => {  //now after uploading get the url photo
          ref.getDownloadURL().subscribe(photoUrl => { //now set the product in cloudfirestore
            this.afs.collection("products").add({
              name,
              price,
              photoUrl
            }).then(() => resolve("Yes! product inserted !!"))
          })
        });
      });
    
  }
}
