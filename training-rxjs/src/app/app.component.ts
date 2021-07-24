import { Component, OnInit } from '@angular/core';

import { fromEvent, merge } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'any-name10';


  search = '';

  fname = '';
  lname = '';
  job = '';
  isBrilliant = false;

  handleKeyUp = () => {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))
     
  }



  ngOnInit(): void {

    // const searchBox = document.getElementById('search-box');

    // const typeahead = fromEvent(searchBox, 'input').pipe(
    //   map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),  //convert from input event object to value
    //   // filter(text => text.length > 2),
    //    debounceTime(1000),  //  like set time out between each typed character
    //    distinctUntilChanged(),  // if same input repeated it doesnt take it
    //   // switchMap(searchTerm => ajax(`/api/endpoint?search=${searchTerm}`))
    // );

    // typeahead.subscribe(data => {
    //   // Handle the data from the API
    //   console.log(data);
    // });

    let A01 = document.getElementById('01');
    let A02 = document.getElementById('02');
    let A03 = document.getElementById('03');
    let A04 = document.getElementById('04');

    let A01Flux = fromEvent(A01, 'keyup');
    let A02Flux = fromEvent(A02, 'keyup');
    let A03Flux = fromEvent(A03, 'change'); // select take change
    let A04Flux = fromEvent(A04, 'change'); // checkbox take change

    // we can merge multitple inputs and listens to them with this function
    // it waits for the last one's request and take it
    let AllFlux = merge(A01Flux, A02Flux, A03Flux, A04Flux).pipe(debounceTime(1000),distinctUntilChanged());

    AllFlux.subscribe(data => {
      // Handle the data from the API
      //console.log(data);
      console.log(this.fname, this.lname, this.job, this.isBrilliant);
    });
  }
}
