import { MapsService } from './serivces/maps.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'IPAPI Mapping';

  lat: string = '';
  lng: string = '';
  country: string = '';

  location: Object;

  constructor(private map: MapsService){  }

  ngOnInit(): void {
    this.map.getLocation().subscribe(res=>{
      console.log(res);
      this.lat = res.latitude;
      this.lng = res.longitude;
      this.country = res.country_name;
    });
  }

}
