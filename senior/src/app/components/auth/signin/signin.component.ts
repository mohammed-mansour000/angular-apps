import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  errorMessage : string = '';

  constructor(private authService: AuthService, private router: Router) { 
    this.authService.afAuth.authState.subscribe(user => { //navigate to dashboard if already loggedIn 
      if(user){
        this.router.navigate(['/dashboard']);
      }
    })
  }

  ngOnInit(): void {
  }

  signin(formValue){
    this.errorMessage = '';
    let signinData ={
      email : formValue.email,
      password: formValue.password
    }

    this.authService.signin(signinData.email, signinData.password).then((result) => {
      console.log(result);
      this.router.navigate(['/dashboard']);
    }).catch((err) => {
      console.log(err)
      this.errorMessage = err.message;
    });
  }

  googleSignIn(){
    this.authService.googleAuth().then((result) => {
      console.log(result);
      this.router.navigate(['/dashboard']);
    }).catch((err) => {
      console.log(err)
      this.errorMessage = err.message;
    });
  }
}
