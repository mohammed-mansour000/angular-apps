import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
   options = {
    headers: {
      'X-RapidAPI-Key': environment.api_key,
      'X-RapidAPI-Host': environment.host_key
    }
  };

  constructor(private http: HttpClient) { }

  getMoviesList(){
    return this.http.get(environment.url, this.options);
  }
}
