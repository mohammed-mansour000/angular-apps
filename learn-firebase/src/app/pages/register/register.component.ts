import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  password = '';
  email = '';
  errorMessage = '';  //validation error handle
  error: {name: string, message: string} = { name : '', message : '' }; //for firebase error handle

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    
    this.clearErrorMessages(); //clearing error messages before regitering again

   if(this.validateForm(this.email, this.password)){
      this.authService.registerWithFirebase(this.email, this.password).then(()=>{
        if(this.authService.error.message === null){
          this.router.navigate(['/user-info']); //navigate to user info after registration
          console.log(this.authService.authStateV)
        }else{
          this.error = this.authService.error;
        }
        
      }).catch(err =>{  //catching errors that could happen
        //console.log(err)
        this.router.navigate(['/register']);
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
