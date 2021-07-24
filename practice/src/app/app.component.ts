import { Component, OnInit } from '@angular/core';

import { RestApiService } from './rest-api.service';

import { DataApiObjectArticle,DataApiObjectTeam,DataApiObjectDirector } from './Model/DataApiObject';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'practice';

  dataArticle :DataApiObjectArticle[] = [];

  dataTeam : DataApiObjectTeam[] = [];

  dataDirector : DataApiObjectDirector[] = [];

  constructor(private restApi:RestApiService){}


  ngOnInit(){
    this.getArticleData();
    this.getTeamData();
    this.getDirectorData();
  }

  getArticleData(){
    this.restApi.getArticle().subscribe((result)=>{
      console.log(result);
      this.dataArticle = result
      console.log(this.dataArticle)
    })
  }

  getTeamData(){
    this.restApi.getTeam().subscribe((result)=>{
      this.dataTeam = result
      console.log(this.dataTeam)
    })
  }

  getDirectorData(){
    this.restApi.getDirectors().subscribe((result)=>{
      this.dataDirector = result
      console.log(this.dataDirector)
    })
  }
}
