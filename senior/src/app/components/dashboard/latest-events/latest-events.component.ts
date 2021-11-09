import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Event } from 'src/app/models/event';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-latest-events',
  templateUrl: './latest-events.component.html',
  styleUrls: ['./latest-events.component.css']
})
export class LatestEventsComponent implements OnInit {

  @ViewChild('slickModal') slickModal: SlickCarouselComponent;

  events: Event[] = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.getEvents();
  }
  


  getEvents(){
    this.eventsService.getEvents().subscribe((res:Event[]) => {
      
      this.events = res;
      console.log(this.events)
    },
    err =>{ console.log(err); }
    );
  }
 

  // slides = [
  //   {img: "http://placehold.it/350x150/000000"},
  //   {img: "http://placehold.it/350x150/111111"},
  //   {img: "http://placehold.it/350x150/333333"},
  //   {img: "http://placehold.it/350x150/666666"}
  // ];

  // slideConfig = { autoplay: false, slidesToShow: 1, slidesToScroll: 1};

   
  // addSlide() {
  //   this.slides.push({img: "http://placehold.it/350x150/777777"})
  // }
  
  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }
  
  // slickInit(e) {
  //   console.log('slick initialized');
  // }
  
  // breakpoint(e) {
  //   console.log('breakpoint');
  // }
  
  // afterChange(e) {
  //   console.log('afterChange');
  // }
  
  // beforeChange(e) {
  //   console.log('beforeChange');
  // }
  // next() {
  //   this.slickModal.slickNext();
  // }
  
  // prev() {
  //   this.slickModal.slickPrev();
  // }
}

