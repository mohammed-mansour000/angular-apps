import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
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

  login(formValue){
    let data = formValue.value;
    this.authService.login(data.email, data.password).then((result) => {
      console.log(result);
      this.router.navigate(['/home']);
    }).catch((err) => {
      this.errorMessage = err.message;
    });
  }
}
