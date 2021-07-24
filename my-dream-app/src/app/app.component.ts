import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-dream-app';
  name = 'mohammed mansur';

  getName(){
    return 'hamzi';
  }

  url = window.location.href;

  getNameF(){
    alert('i am hamzi');
  }

  currentValue = '';

  getVal(val){
    this.currentValue = val;
    console.log(val);
  }

  color = "blued";

  data= [

    {
      name : "hamzi",
      age : 20,
      email : "hamzimansour123@gmail.com"
    },
    {
      name : "mohammed",
      age : 34,
      email : "hamzimansour123@gmail.com"
    },
    {
      name : "ahmad",
      age : 24,
      email : "hamzimansour123@gmail.com"
    }
  ]

  getValueForm(val){
    console.log(val);
  }
}
