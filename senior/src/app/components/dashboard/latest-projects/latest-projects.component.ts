import { Component, OnInit, ViewChild } from '@angular/core';
//import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-latest-projects',
  templateUrl: './latest-projects.component.html',
  styleUrls: ['./latest-projects.component.css']
})
export class LatestProjectsComponent implements OnInit {

  //@ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;


  constructor() { }

  ngOnInit(): void {
  }

  // prevSlide(){
  //   this.carousel.prev();
  // }

  // nextSlide(){
  //   this.carousel.next();
  // }

  // stopSlider(){
  //   this.carousel.pause();
  // }

  slideActivate(ngbSlideEvent: NgbSlideEvent) {
    console.log(ngbSlideEvent.source);
    console.log(ngbSlideEvent.paused);
    console.log(NgbSlideEventSource.INDICATOR);
    console.log(NgbSlideEventSource.ARROW_LEFT);
    console.log(NgbSlideEventSource.ARROW_RIGHT);
  }
}
