import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-products-by-date',
  templateUrl: './view-all-products-by-date.component.html',
  styleUrls: ['./view-all-products-by-date.component.css']
})
export class ViewAllProductsByDateComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  searchDate = '';

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data=>{
      this.searchDate = data.date;
      console.log(this.searchDate);
    })
  }

}
