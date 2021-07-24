import { Observable } from 'rxjs';
import { BackendService } from './../../services/backend.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-set-product',
  templateUrl: './set-product.component.html',
  styleUrls: ['./set-product.component.css']
})
export class SetProductComponent implements OnInit, OnDestroy {

  toggleField : string;

  savedChanges = false;
  error :boolean = false;
  errorMessage: string = '';
  dataLoading : boolean = false;
  private querySubsription;

  myDocData: any;

  dataSource: MatTableDataSource<any>;
  members: any[];

  profileUrl: Observable<string | null>;
  myDocId;
  takeHostSelfie = false;
  showHostSelfie = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['category', 'scategory', 'name', 'price', '_id'];

  constructor(private backendService: BackendService, private storage: AngularFireStorage) {}

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
    this.querySubsription = this.backendService.getDocs('product').subscribe(members => {
      this.members = members;
      this.dataSource = new MatTableDataSource(members);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataLoading = false;
      console.log(members)
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
    this.querySubsription = this.backendService.getFilterProducts('product', filters).subscribe(members => {
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
    this.querySubsription = this.backendService.setDocs('product', formData).then(res => {
        this.savedChanges = true;
        this.dataLoading = false;
        console.log(res)
    }).catch(error =>{
      this.error = true;
      this.errorMessage = error.message;
      this.dataLoading = false;
      console.log(error);
    })
  }


  updateData(formData){
    this.dataLoading = true;
    this.querySubsription = this.backendService.updateProducts('product', formData).subscribe(members => {
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
    this.querySubsription = this.backendService.getOneDoc('product', docId).subscribe(res => {
      if(res){
        this.myDocData = res;
        console.log(res)
        this.toggle('editMode');
        this.dataLoading = false;
      }else{
        console.log("jhi")
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
    this.querySubsription = this.backendService.deleteOneProductDoc('product', docId).subscribe(res => {
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


  //pic function
  getPic(picId){
    const ref = this.storage.ref(picId);
    this.profileUrl = ref.getDownloadURL()
  }

  deleteProductPic(docId){
    if(confirm("are you sure to delete pic")){
      
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
