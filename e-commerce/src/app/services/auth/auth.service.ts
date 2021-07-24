import { Profile } from './../../models/profile';
 import { Observable } from 'rxjs';
import { ErrorHandler } from './../../shared/error-handler';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { Cart } from 'src/app/models/cart';
import { CartItem } from 'src/app/models/cart-item';
import { UserData } from 'src/app/models/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  _registerUrl = `http://localhost:3000/auth/register`;
  _loginUrl = `http://localhost:3000/auth/login`;
  _userUrl = `http://localhost:3000/auth/current-user`;
  _profileUrl = `http://localhost:3000/profile`;

  private _usersURL = `http://localhost:3000/auth/system-users`;
  private _userDataURL = `http://localhost:3000/auth/user-main-data`;

  private imageChangeUrl = `http://localhost:3000/profile/userprofile/changeprofileimage`;
  private newImageUrl = `http://localhost:3000/profile/userprofile/setprofileimage`;
  private contactUrl = `http://localhost:3000/contacts/new-mail`;

  private errorHandler: ErrorHandler = new ErrorHandler();

  public currentUser?: User;
  public profile?: Profile;
  public cart?: Cart;
  public cartItem?: CartItem;
  public username?: String;
  

  register(data:any) : Observable<any>{
    try {
      return this.http.post<any>(this._registerUrl, data);
    } catch (error) {
     // this.errorHandler.handleError(error);
      throw(error);
    }
  
  }

  login(data:any) : Observable<any>{
    try {
      return this.http.post<any>(this._loginUrl, data);
    } catch (error) {
      //this.errorHandler.handleError(error);
      throw(error);
    }
  }
  
  userLogout(){
    localStorage.removeItem('token');  //remove the tokens when logout
    this.router.navigate(['/login']);  //redirect user to login page
  }

  prepareUserData():Observable<UserData>{
    try {
      return this.http.get<any>(this._userDataURL);
    } catch (error) {
      //this.errorHandler.handleError(error);
      throw(error);
    }
  }

  getCurrentUser():Observable<any>{
    try {
      return this.http.get<any>(this._userUrl);
    } catch (error) {
      //this.errorHandler.handleError(error);
      throw(error);
    }
  }

  getSystemUsers(): Observable<User[]>{
    try {
      return this.http.get<User[]>(this._usersURL);
    } catch (error) {
      //this.errorHandler.handleError(error);
      throw(error);
    }
  }

  getToken(){
    return localStorage.getItem('token'); //get information that we put during login process
  }

  isLoggedIn(){
    return !!localStorage.getItem('token'); //put !! to return a boolean value
  }

  getUserProfile(): Observable<Profile>{
    try {
      return this.http.get<Profile>(this._profileUrl);
    } catch (error) {
      //this.errorHandler.handleError(error);
      throw(error);
    }
  }

  pUserData(){
    if(this.isLoggedIn()){
      this.prepareUserData().subscribe((data:UserData)=>{ //we have gotten data from userdata if user logged 
        this.profile = data.profile;
        this.username = `${data.profile?.firstname} ${data.profile?.lastname}`;
        this.cart = data.cart;
        this.cartItem = data.cartItem;
      });

      this.getCurrentUser().subscribe(res=>{
        this.currentUser = res;
      });

    }
  }

  messageContact(messageForm: any): Observable<void>{
    try {
      return this.http.post<any>(this.contactUrl, messageForm);
    } catch (error) {
      // this.errorHandler.handleError(error);
      throw(error);
    }
  }


  updateProfile(updateForm: any): Observable<Profile> {
    try {
      return this.http.put<Profile>(
        `${this._profileUrl}/userprofile/edit`,
        updateForm
      );
    } catch (error) {
       // this.errorHandler.handleError(error);
       throw(error);
    }
  }

}

