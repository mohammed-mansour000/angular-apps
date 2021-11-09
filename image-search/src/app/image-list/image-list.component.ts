import { ImageService } from './../shared/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images : any[] = [];

  searchQuery = '';

  imageFound: boolean = false;

  searching: boolean = false;

  constructor(private imageService :ImageService) { }

  ngOnInit(): void {
    
  }

  searchImages(query: string){
    this.searching = true   //displaying loading until result is goten 
    this.imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false
      )
  }

  handleSuccess(data){
    this.images = data.hits;
    this.imageFound = true;
    console.log('this is the data fetched',data)
    console.log("the images array : ", this.images)
  }

  handleError(error){
    console.log(error);
  }
}
