import { Injectable } from '@angular/core';
 import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestaService {

  url = "http://localhost:3000/restaurants";
  url_users = "http://localhost:3000/users";

  constructor( private http: HttpClient ) { }

  getList(){    //get used to get data which is obvious
    return this.http.get(this.url);
  }

  saveResta(dataToBeSent: any){   //post usually used to add
    //console.log("test",dataToBeSent)
    return this.http.post(this.url, dataToBeSent);
  }

  deleteResta(id :number){    //delete used to delete which is obvious
    return this.http.delete(`${this.url}/${id}`);
  }

  getForCertainResta(id:number){
    return this.http.get(`${this.url}/${id}`);
  } 

  updateResta(dataToBeUpdated : any, id : number){    //put used to update data
    return this.http.put(`${this.url}/${id}`,dataToBeUpdated);
  } 

  registerResta(dataTobeRegistered:any){
    return this.http.post(this.url_users,dataTobeRegistered);
  }
}
