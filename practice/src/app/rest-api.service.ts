import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { DataApiObjectArticle, DataApiObjectDirector, DataApiObjectTeam } from './Model/DataApiObject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http:HttpClient) { }

  rootUrl = 'https://api-for-first-angular.herokuapp.com/';

  getArticle():Observable<DataApiObjectArticle[]>{
    return this.http.get<DataApiObjectArticle[]>(this.rootUrl + "articles");
  }

  getTeam():Observable<DataApiObjectTeam[]>{
    return this.http.get<DataApiObjectTeam[]>(this.rootUrl + "team");
  }

  getDirectors():Observable<DataApiObjectDirector[]>{
    return this.http.get<DataApiObjectDirector[]>(this.rootUrl + "directors");
  }
  
}
