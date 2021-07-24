import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ImageService } from '../image-detail/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {

  @Input() filterBy? : String = 'all';

  allImages :any[]= [];

  constructor(private imageService:ImageService) { 
    this.allImages = imageService.getImages();
  }

  ngOnChanges(): void {
    this.allImages = this.imageService.getImages();  
  }

  ngOnInit(): void {
    console.log(this.allImages)
    console.log(this.filterBy)
  }

 

}
