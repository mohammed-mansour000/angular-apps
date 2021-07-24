import { BackendService } from './../../services/backend.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  toggleField : string;

  savedChanges = false;
  error :boolean = false;
  errorMessage: string = '';
  dataLoading : boolean = false;
  private querySubsription;

  myDocData: any;

  dataSource: MatTableDataSource<any>;
  members: any[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['category', 'scategory', 'name', 'price', '_id'];

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.toggleField = 'searchMode';
    this.dataSource = new MatTableDataSource(this.members);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   
  } 

  toggle(filter){
    if(!filter){ filter = "searchMode" }
    else { filter = filter }
    this.toggleField = filter;
  }


  getData(){
    this.dataLoading = true;
    this.querySubsription = this.backendService.getDocs('orders').subscribe(members => {
      this.members = members;
      this.dataSource = new MatTableDataSource(members);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataLoading = false;
    },
    error =>{
      this.error = true;
      this.errorMessage = error.message;
      this.dataLoading = false;
    },
    () => { this.error = false; this.dataLoading = false; }
    );
  }


  getFilterData(filters){
    this.dataLoading = true;
    this.querySubsription = this.backendService.getFilterProducts('orders', filters).subscribe(members => {
      this.members = members;
      this.dataSource = new MatTableDataSource(members);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataLoading = false;
    },
    error =>{
      this.error = true;
      this.errorMessage = error.message;
      this.dataLoading = false;
    },
    () => { this.error = false; this.dataLoading = false; }
    );
  }


  setData(formData){
    this.dataLoading = true;
    this.querySubsription = this.backendService.setDocs('orders', formData).then(res => {
      this.savedChanges = true;
      this.dataLoading = false;
    
  }).catch(error =>{
    this.error = true;
    console.log(error)
    this.errorMessage = error.message;
    this.dataLoading = false;
  })
  }


  updateData(formData){
    this.dataLoading = true;
    this.querySubsription = this.backendService.updateProducts('orders', formData).subscribe(members => {
      if(members){
        this.savedChanges = true;
        this.dataLoading = false;
      }
    },
    error =>{
      this.error = true;
      this.errorMessage = error.message;
      this.dataLoading = false;
    },
    () => { this.error = false; this.dataLoading = false; }
    );
  }


  getDoc(docId){
    this.dataLoading = true;
    this.querySubsription = this.backendService.getOneDoc('orders', docId).subscribe(res => {
      if(res){
        this.myDocData = res;
        this.toggle('editMode');
        this.dataLoading = false;
      }
    },
    error =>{
      this.error = true;
      this.errorMessage = error.message;
      this.dataLoading = false;
    },
    () => { this.error = false; this.dataLoading = false; }
    );
  }


  deleteDoc(docId){
   if(confirm('Are you sure you want to delete this ?')){
    this.dataLoading = true;
    this.querySubsription = this.backendService.deleteOneProductDoc('orders', docId).subscribe(res => {
      if(res){
        this.toggle('searchMode');
        this.dataLoading = false;
      }
    },
    error =>{
      this.error = true;
      this.errorMessage = error.message;
      this.dataLoading = false;
    },
      () => { this.error = false; this.dataLoading = false; }
    );
   }
  }


  //function for data table result view
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.querySubsription){
      this.querySubsription.unsubscribe();
    }
  }
}
