import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Location{
  latitude: string;
  longitude: string;
  country_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  url = 'http://api.ipapi.com/api/check?access_key='+environment.IPAPI_KEY;

  constructor(private http: HttpClient) { }

  getLocation(){
    return this.http.get<Location>(this.url);
  }
}
