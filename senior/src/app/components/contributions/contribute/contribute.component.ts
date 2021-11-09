import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {

  collaboratorItems = [
    {value: 1, name: "test1"},
    {value: 2, name: "test2"},
    {value: 3, name: "test3"},
    {value: 4, name: "test4"},
    {value: 5, name: "test5"},
    {value: 6, name: "test6"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
