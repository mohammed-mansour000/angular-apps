import { Component } from '@angular/core';

import { CallApiService } from './call-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second-app';

  data=[];
  constructor(private call_api:CallApiService){

    this.call_api.getData().subscribe(data=>{
      // data.forEach(element => {
      //   console.log(element.id);
      // });
      this.data=data
    });

  }
}
