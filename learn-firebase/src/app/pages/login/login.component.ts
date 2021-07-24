import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password = '';
  email = '';
  errorMessage = '';  //validation error handle
  error: {name: string, message: string} = { name : '', message : '' }; //for firebase error handle

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  login(){
        
    this.clearErrorMessages(); //clearing error messages before regitering again

   if(this.validateForm(this.email, this.password)){
      this.authService.loginWithFirebase(this.email, this.password).then(()=>{
        this.router.navigate(['/user-info']); //navigate to user info after registration
        console.log(this.authService.authStateV)
      }).catch(err =>{  //catching errors that could happen
        this.error = err;
        this.router.navigate(['/login']);
      })
    }
  }

  validateForm(email, password){ //function to validate inputs 
    if(email.length === 0 && password.length !== 0){
      this.errorMessage = "please enter email";
      return false;
    }
    if(password.length === 0 && email.length !== 0){
      this.errorMessage = "please enter password";
      return false;
    }

    if(password.length === 0 && email.length === 0){
      this.errorMessage = "please enter email and password";
      return false;
    }

    this.errorMessage = '';
    return true;
  }

  clearErrorMessages(){
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

}
