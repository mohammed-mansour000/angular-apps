import { Observable } from 'rxjs';
import { BackendService } from './../../services/backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  toggle: boolean = true;

  savedChanges = false;
  error :boolean = false;
  errorMessage: string = '';
  dataLoading : boolean = false;
  private querySubsription;

  myDocData: any;
  counter = 0;
  profileUrl: string;
  members: any[];

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.getData();
  }


  
  getFilterData(filters){
    this.dataLoading = true;
    this.querySubsription = this.backendService.getFilterProducts('product', filters).subscribe(members => {
      this.members = members;
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
  getData(){
    this.dataLoading = true;
    this.querySubsription = this.backendService.getDocs('product').subscribe(members => {
      this.members = members;
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


  getPic(picId){
    this.profileUrl = '';
  }


  showDetails(item){
    this.counter = 0;
    this.myDocData = item;
    this.getPic(item.path);
    //capture user interest event, it means that user has looked into this item
    this.dataLoading = true;
    let data = item;

    this.querySubsription = this.backendService.updateShoppingInterest('interests', data).subscribe(members => {
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

  countProd(filter){
    if(filter == 'add'){
      this.counter = this.counter++;
    }else{
      if(this.counter > 0){
        this.counter = this.counter--;
      }
    }
  }


  addToCart(item, counter){
    this.dataLoading = true;
    let data = item;
    data.qty = counter;

    this.querySubsription = this.backendService.updateShoppingCart('cart', data).subscribe(members => {
      this.dataLoading = false;
      this.counter = 0;
      this.savedChanges = true;
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
