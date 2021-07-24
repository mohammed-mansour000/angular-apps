import { UserService } from './../../services/user.service';
import { User } from './../../interfaces/user.interface';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage : string = '';

  constructor(private authService: AuthService, private userService: UserService, private router: Router) {
    this.authService.user.subscribe(user =>{ //navigate to home if already loggedIn 
      if(user){
        this.router.navigate(['home']);
      }
    });
   }

  ngOnInit(): void {
  }

  signup(formValue){
    this.errorMessage = '';
    let data: User = formValue.value;

    this.authService.signup(data.email, data.password).then((result) => {
      //now set the user in cloudFireStore
      let isAdmin = false;
      this.userService.addNewUser(result.user.uid, data.username, data.address, isAdmin).then(() => {
        this.router.navigate(['/home']);
      }).catch((err) => {
        this.errorMessage = err.message;
      });;
      console.log(result.user.uid)
    }).catch((err) => {
      console.log(err);
      this.errorMessage = err.message;
    });
  }
}
