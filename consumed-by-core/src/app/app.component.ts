import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import * as signalR from '@aspnet/signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  // students = [];

  // constructor(private apiCaller: HttpClient){

  // }
  // ngOnInit(): void {
  //   this.apiCaller.get("https://localhost:5001/api/student/GetResults").subscribe((res : []) => {
  //     console.log(res);
  //     this.students = res;
  //     this.students.forEach(element => {
  //       element.statement = element.pass ? "Mabrouk" : "Hard Luck";
  //     })
  //   });
  // }
  

  //here we are fetching data with real time server way, we are using @aspnet/signalr package
  data = [];
  private hubConnection : signalR.HubConnection;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl('https://heroku-and-docker-app.herokuapp.com/results')
                            .build();
 
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }
 
  public addTransferChartDataListener = () => {
    this.hubConnection.on('NewResults', (data) => {
      this.data = data;
      this.data.forEach(element => {
        element.statement = element.pass ? "Mabrouk" : "Hard Luck";
      });
      console.log(data);
    });
  }

  // In the Subscribe Method do the following
  constructor(private apiCaller : HttpClient)
 {
    this.apiCaller.get('https://heroku-and-docker-app.herokuapp.com/api/Student/GetResults').subscribe((data : [any]) => {
     //console.log(data);
     this.data = data;
     this.data.forEach(element => {
             element.statement = element.pass ? "Mabrouk" : "Hard Luck";
           });
     this.startConnection();
     this.addTransferChartDataListener();
   })
 }

}
