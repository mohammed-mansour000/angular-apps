import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'senior';
  isLoggedIn = false;

  constructor(private authService: AuthService, private router : Router) {
    this.authService.afAuth.authState.subscribe(user => {
      console.log(user)
      if(user){
        this.isLoggedIn = true;
      }
    })
   }

  signout(){
    this.authService.signout().then((result) => {
      //this.router.navigate(['/signin']);
      this.router.navigate(['']);
    }).catch((err) => {
      console.log(err);
    });
  }
}


