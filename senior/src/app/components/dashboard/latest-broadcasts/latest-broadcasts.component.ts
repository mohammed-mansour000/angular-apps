import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Broadcast } from 'src/app/models/broadcast';
import { BroadcastService } from 'src/app/services/broadcast.service';

@Component({
  selector: 'app-latest-broadcasts',
  templateUrl: './latest-broadcasts.component.html',
  styleUrls: ['./latest-broadcasts.component.css']
})
export class LatestBroadcastsComponent implements OnInit {
  
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;

  broadcasts : Broadcast[] = [];

  constructor(private broadcastService: BroadcastService) { }

  ngOnInit(): void {
    this.getBroadcasts();
  }

  getBroadcasts(){
    this.broadcastService.getBroadcasts().subscribe((res:Broadcast[]) => {
      
      this.broadcasts = res;
      console.log(this.broadcasts)
    },
    err => {console.log(err);}
    );
  }
  

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    //dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 985,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1
        }
      }
    ]
};
  //slideConfig = {autoplay: true, slidesToShow: 3, slidesToScroll: 1, speed:800, autoplaySpeed: 5000, cssEase: 'cubic-bezier(0.250,  0.060, 0.050, 0.040)'};


}

