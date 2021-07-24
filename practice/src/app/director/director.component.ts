import { Component, Input, OnInit } from '@angular/core';

import { DataApiObjectDirector } from '../Model/DataApiObject';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {
  
  @Input() data:DataApiObjectDirector = new DataApiObjectDirector(0,"any","any","any","any");
  
  constructor() { }

  ngOnInit(): void {
  }

}
