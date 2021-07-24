import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { 
    if(this.authService.isLoggedIn){
      this.router.navigate(['/dashboard']);
    }
  }
  
  ngOnInit(): void {
  }

}
