import { BackendService } from './../../services/backend.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoggedIn :boolean = false;

  savedChanges = false;
  error :boolean = false;
  errorMessage: string = '';
  dataLoading: boolean = false;
  socialAuth: boolean = true;
  
  constructor(public afAuth: AngularFireAuth, private backendService: BackendService) { }

  ngOnInit(): void {
    this.getAuthStatus();
    
  }


  getAuthStatus(){
    this.dataLoading = true;
    this.backendService.redirectLogin().then((result) => {
      if(result.credential){
        this.dataLoading = false;
        console.log(result.credential);
      }else{
        console.log(result)
      }
    }).catch((err) => {
      this.error = true;
      this.errorMessage = err.message;
      this.userLoggedIn = false;
      this.dataLoading = false;
      console.log(err);
    });
    this.dataLoading = false;
    
  }

  //loginType may be google or facebook login or a direct login
  login(loginType, formData?){
    this.dataLoading = true;
    this.backendService.login(loginType, formData).then((result) => {
      this.dataLoading = false;
      console.log("form login.ts >>>",result)
    }).catch((err) => {
      this.error = true;
      this.errorMessage = err.message;
      this.userLoggedIn = false;
      this.dataLoading = false;
      console.log(err);
    });
  }

  logout(){
    this.dataLoading = true;
    return this.backendService.logout();
  }

}
