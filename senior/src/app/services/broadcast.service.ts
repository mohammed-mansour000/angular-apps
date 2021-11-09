import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  broadcastUrl = environment.baseUrl + "broadcasts";

  constructor(private http: HttpClient) { }

  getBroadcasts(){
    return this.http.get(this.broadcastUrl);
  }
}
