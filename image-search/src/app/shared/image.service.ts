import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private query: String;
  private API_KEY: String = environment.PIXABAY_API_KEY;
  private API_URL: String = environment.PIXABAY_API_URL;
  private URL: String = typeof new String(this.API_URL)  + typeof new String(this.API_KEY) + '&q=';
  private perPage: String = '&per_page=10';

  constructor(private http: HttpClient) { }

  getImage(query){
    return this.http.get('https://pixabay.com/api/?key='+ this.API_KEY +'&q='+query+ this.perPage).pipe(map(res=> res));
  }
}
