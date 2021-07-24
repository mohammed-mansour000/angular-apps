import { Component, Input, OnInit } from '@angular/core';

import { DataApiObjectArticle } from '../Model/DataApiObject';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() data:DataApiObjectArticle = new DataApiObjectArticle(0,"any","any","any","any","any");

  constructor() { }

  ngOnInit(): void {
  }

}
