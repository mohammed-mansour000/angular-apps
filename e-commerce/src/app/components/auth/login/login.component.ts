import { AlertService } from './../../../services/alert/alert.service';
import { CartService } from './../../../services/cart/cart.service';
import { AuthService } from './../../../services/auth/auth.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //we gonna use reactive forms
  //we gonna use reactive forms
  authCredentialsDto!: FormGroup;

  showPassword = true; //for toggle showing password or not

  modalRef!: BsModalRef;  //for ngx bootstrap

  @ViewChild('invalidCredentials', { static: false }) //this is like DOM in javascript
  invalidCredentialsTemp!: TemplateRef<any>;

  constructor(
    private authService: AuthService,
    private router: Router, 
    private cartService: CartService,
    private formBuilder : FormBuilder,
    private alertService: AlertService,
    private modalService: BsModalService, //this is what shows the <ngtemplate>
  ) { 
    if(this.authService.isLoggedIn()){  // check if user already login and navigate to home
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    this.authCredentialsDto = this.formBuilder.group({  //take the values form reative form
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
  }

  // now function for login 
  userLogin(){
    
    // pass form's value inside login function of authService
    this.authService.login(this.authCredentialsDto?.value).subscribe(res => { //now take the response
      localStorage.setItem('token', res.accessToken); //register the webTokens
      this.authService.prepareUserData();
      this.authService.getCurrentUser().subscribe(res =>{
        this.authService.currentUser = res; //get current user
      });
      this.router.navigate(['/home']);  //go to home
    }, error => {
      this.alertService.error(error); //give the error message to error function we made inside alert service
      this.modalService.show(this.invalidCredentialsTemp);
    });
  }


  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  hide(){
    this.modalRef.hide();
  }

}
