import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  //for email validation
  //we also used it in server side
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  showSuccessMessage: boolean = false;
  serverErrorMessage: string = "";

  constructor(public userService: UserService) { }

  ngOnInit(): void {

  }

  osSubmit(form: NgForm){
    this.userService.signUp(form.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 4000);
        console.log(res);
        this.resetForm(form);
      },
      err => {
        if(err.status === 422){
          this.serverErrorMessage = err.error.join('<br/>');
        }else{
          this.serverErrorMessage = "Something went wrong. Please contact the admin.";
        }
      }
    );
  }

  resetForm(form: NgForm){
    this.userService.selectedUser = {
      fullName: '',
      email: '',
      password: ''
    }
    form.reset();
    this.serverErrorMessage = '';
  }
}
