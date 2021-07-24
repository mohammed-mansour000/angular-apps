import { Component, Input, OnInit } from '@angular/core';

import { DataApiObjectTeam } from '../Model/DataApiObject';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() data:DataApiObjectTeam = new DataApiObjectTeam(0,"any","any","any");
  
  constructor() { }

  ngOnInit(): void {
  }

}
