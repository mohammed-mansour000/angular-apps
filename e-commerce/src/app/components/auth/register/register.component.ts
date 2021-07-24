import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor(
    private formBuiler: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { 
    if(this.authService.isLoggedIn()){  // check if user already login and navigate to home
      this.router.navigate(['/home']);
    }
  }


  get userName(){  //get the username from a certain form
    return this.registrationForm.get("authCredentialsDto")?.get("username")?.value;
  }


  get password(){  //get the password from a certain form
    return this.registrationForm.get("authCredentialsDto")?.get("password")?.value;
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuiler.group({
      authCredentialsDto: new FormGroup({
        username: new FormControl(null, Validators.required),
        password: new FormControl(null)
      }),
      createProfileDto: new FormGroup({
        firstname: new FormControl(null, Validators.required),
        lastname: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.required),
        gender: new FormControl(null, Validators.required),
        age: new FormControl(null, Validators.required),
        phone: new FormControl(null, Validators.required),
        country: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        address: new FormControl(null, Validators.required),
      })
    });
  }


  register(){
    const userLoginInfo = {
      username: this.userName.value,
      password: this.password.value
    }
    this.authService.register(this.registrationForm.value).subscribe(res =>{
      this.authService.login(userLoginInfo).subscribe(resToken => {
        localStorage.setItem('token', resToken.accessToken); //register the webTokens
        this.authService.prepareUserData();
        this.authService.getCurrentUser().subscribe(res =>{
          this.authService.currentUser = res; //get current user
        });
        this.router.navigate(['/home']);  //go to home
      }, error => {
        console.error(error);
      });
    }, error =>{

    });
  }

}
