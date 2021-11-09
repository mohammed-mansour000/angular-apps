import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage : string = '';

  constructor(private authService: AuthService, private router: Router) { 
    this.authService.afAuth.authState.subscribe(user => { //navigate to home if already loggedIn 
      if(user){
        this.router.navigate(['/dashboard']);
      }
    })
  }

  ngOnInit(): void {
  }

  signup(formValue){
    this.errorMessage = '';
    let signupData = { email: formValue.email, password: formValue.password }

    this.authService.signup(signupData.email, signupData.password).then((result) => {
      console.log(result);
      this.router.navigate(['/dashboard']);
    }).catch((err) => {
      console.log(err)
      this.errorMessage = err.message;
    });
  }

  googleSignUp(){
    this.authService.googleAuth().then((result) => {
      console.log(result);
      this.router.navigate(['/dashboard']);
    }).catch((err) => {
      console.log(err)
      this.errorMessage = err.message;
    });
  }

}
