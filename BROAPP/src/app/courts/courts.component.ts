import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courts',
  templateUrl: './courts.component.html',
  styleUrls: ['./courts.component.css']
})
export class CourtsComponent implements OnInit {

  courts: any[] = [];
  name = '';
  address = '';

  constructor(private apiCaller: HttpClient) { }

  ngOnInit(): void {
    this.getAllCourts();
  }

  getAllCourts(){
    this.apiCaller.get("https://localhost:5001/api/data/GetCourts").subscribe(
      (res: any) => {
        this.courts = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  removeCourt(court_id: number){

    //since we are using post we need to sent headers
    //we are sending an object json({'COURT_ID': court_id}) so we need 'Content-Type': 'application/json' in headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const options = { headers: headers };

    this.apiCaller.post("https://localhost:5001/api/data/DeleteCourt", {'COURT_ID': court_id}, options).subscribe(
      res => {
        alert("Court has been deleted");
        this.getAllCourts();
      },
      err => {
        console.log(err);
      }
    );
  }

  addCourt(){

    //since we are using post we need to sent headers
    //we are sending an object json({'COURT_ID': court_id}) so we need 'Content-Type': 'application/json' in headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const options = { headers: headers };

    let courtToBeAdded = {'COURT_ID': -1, 'NAME': this.name, 'ADDRESS': this.address};

    this.apiCaller.post("https://localhost:5001/api/data/AddOrEditCourt", courtToBeAdded, options).subscribe(
      res => {
        this.name = '';
        this.address = '';
        this.getAllCourts();
      },
      err => {
        console.log(err);
      }
    );
  }

  updateCourt(court: any){
     //since we are using post we need to sent headers
    //we are sending an object json({'COURT_ID': court_id}) so we need 'Content-Type': 'application/json' in headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const options = { headers: headers };

    let courtToBeAdded = {'COURT_ID': court.COURT_ID, 'NAME': court.NAME, 'ADDRESS': court.ADDRESS};

    this.apiCaller.post("https://localhost:5001/api/data/AddOrEditCourt", courtToBeAdded, options).subscribe(
      res => {
        this.name = '';
        this.address = '';
        this.getAllCourts();
      },
      err => {
        console.log(err);
      }
    );
  }
}
