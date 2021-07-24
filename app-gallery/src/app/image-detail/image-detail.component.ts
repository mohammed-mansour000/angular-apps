import { ImageService } from './shared/image.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  constructor(private imageService:ImageService, private router: ActivatedRoute) { }

  id = 0;
  image: any;

  ngOnInit(): void {
    this.router.params.subscribe(data=>{
      this.id = data.id
      console.log(this.id)
    })
    this.image = this.imageService.getImage(this.id);
    console.log(this.image)
  }

}
