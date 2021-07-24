import { UserService } from 'src/app/services/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOpen: boolean = false;
  isUser: boolean = false;
  isAdmin: boolean = false;

  constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth, private userService: UserService) { 
    this.afAuth.authState.subscribe(user => {
      localStorage.setItem('user', JSON.stringify(user));
      console.log(localStorage.getItem('user'));
    })
  }

  ngOnInit(): void {
    //we will subscribe the user to check if user is null => is not loggedIn else => loggedIn
    this.authService.user.subscribe(user =>{
      console.log(user);
      if(user) { 
        this.isUser = true; 
        this.authService.userId = user.uid; 
        this.authService.isAdmin(user.uid).subscribe((res):any => {
         //console.log(res.payload.data()["isAdmin"])
          if(res.payload.data()["isAdmin"]) { this.isAdmin = true; }
          else{ this.isAdmin = false; }
        })
      }
      else     { this.isUser = false; this.authService.userId = '';}
    });

    //other way to check if isAdmin(youtube way)
    // this.authService.user.subscribe(user => {
    //   if(user){
    //     this.isUser = true;
    //     this.authService.userId = user.uid;
    //     this.userService.getUserData().subscribe(data =>{
    //       if(data['isAdmin']) { this.isAdmin = true; }
    //     });
    //   }
    //   else{
    //     this.isUser = false;
    //     this.authService.userId = '';
    //   }
    // });
  }

  toggleNavbar(){
    this.isOpen = !this.isOpen;
  }

  logout(){
    this.authService.signout().then((result) => {
      this.router.navigate(['/login']);
    }).catch((err) => {
      console.log(err);
    });
  }

}
