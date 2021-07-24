import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  visibleImages = [];

  constructor() { }

  getImages(){
    return this.visibleImages = images.slice(0);
  }

  getImage(id:number){
    return images.slice(0).find(el=> el.id == id);
  }
}

const images =[
  { "id":1 , "category":"boats", "caption":"view a boat", "url":"assets/img/1.jpg"},
  { "id":2 , "category":"boats", "caption":"view a boat", "url":"assets/img/2.jpg"},
  { "id":3 , "category":"boats", "caption":"view a boat", "url":"assets/img/3.jpg"},
  { "id":4 , "category":"boats", "caption":"view a boat", "url":"assets/img/4.jpg"},
  { "id":5 , "category":"boats", "caption":"view a boat", "url":"assets/img/5.jpg"},
  { "id":6 , "category":"boats", "caption":"view a boat", "url":"assets/img/6.jpg"},
  { "id":7 , "category":"boats", "caption":"view a boat", "url":"assets/img/7.jpg"},
  { "id":8 , "category":"boats", "caption":"view a boat", "url":"assets/img/8.jpg"},
  { "id":9 , "category":"buildings", "caption":"view a buildings", "url":"assets/img/9.jpg"},
  { "id":10 , "category":"buildings", "caption":"view a buildings", "url":"assets/img/10.jpg"},
  { "id":11 , "category":"buildings", "caption":"view a buildings", "url":"assets/img/11.jpg"},
  { "id":12 , "category":"buildings", "caption":"view a buildings", "url":"assets/img/12.jpg"},
  { "id":13 , "category":"buildings", "caption":"view a buildings", "url":"assets/img/13.jpg"},
  { "id":14 , "category":"buildings", "caption":"view a buildings", "url":"assets/img/14.jpg"},
  { "id":15 , "category":"buildings", "caption":"view a buildings", "url":"assets/img/15.jpg"},
  { "id":16 , "category":"library", "caption":"view a library", "url":"assets/img/16.jpg"},
  { "id":17 , "category":"library", "caption":"view a library", "url":"assets/img/17.jpg"},
  { "id":18 , "category":"library", "caption":"view a library", "url":"assets/img/18.jpg"},
  { "id":19 , "category":"library", "caption":"view a library", "url":"assets/img/19.jpg"},
  { "id":20 , "category":"library", "caption":"view a library", "url":"assets/img/20.jpg"},
  { "id":21 , "category":"library", "caption":"view a library", "url":"assets/img/21.jpg"},
  { "id":22 , "category":"library", "caption":"view a library", "url":"assets/img/22.jpg"},
  { "id":23 , "category":"coffee", "caption":"view a coffee", "url":"assets/img/23.jpg"},
  { "id":24 , "category":"coffee", "caption":"view a coffee", "url":"assets/img/24.jpg"},
  { "id":25 , "category":"coffee", "caption":"view a coffee", "url":"assets/img/25.jpg"},
  { "id":26 , "category":"coffee", "caption":"view a coffee", "url":"assets/img/26.jpg"},
  { "id":27 , "category":"coffee", "caption":"view a coffee", "url":"assets/img/27.jpg"},
  { "id":28 , "category":"coffee", "caption":"view a coffee", "url":"assets/img/28.jpg"},
  { "id":29 , "category":"coffee", "caption":"view a coffee", "url":"assets/img/29.jpg"},
  { "id":30 , "category":"coffee", "caption":"view a coffee", "url":"assets/img/30.jpg"},
]
    
