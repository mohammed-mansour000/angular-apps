import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';

@Component({
  selector: 'app-single-client',
  templateUrl: './single-client.component.html',
  styleUrls: ['./single-client.component.css']
})
export class SingleClientComponent implements OnInit {

  selectedClient: Client = null;

  url: string = 'http://localhost:3000/save-client';

  constructor(private http: HttpClient) {
    this.selectedClient = new Client();
    this.selectedClient.fname = 'hamzi';
    this.selectedClient.lname = 'mansour';
    this.selectedClient.email = 'email';
    this.selectedClient.mobile = '555';
   }

  ngOnInit(): void {
    
  }

  postData(){
    const headers = new HttpHeaders({"content-Type" : "application.json"});
    const options = {headers: headers};
    console.log(this.selectedClient)
    this.http.post(this.url, this.selectedClient.email, options).subscribe((res:Client)=>{
      //alert("data is sent");
      console.log(res);
    }, err =>{
      console.log(err);
    });
  }

}
