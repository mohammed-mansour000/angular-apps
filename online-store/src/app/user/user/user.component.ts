import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  dataLoading: boolean = false;
  savedChanges = false;
  error :boolean = false;
  errorMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }


  logout(){

  }

  getUser(){

  }
}
