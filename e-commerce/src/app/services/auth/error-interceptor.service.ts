import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor{
//export class ErrorInterceptorService{

  constructor(private auth: AuthService, private router: Router) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if( [401,403].indexOf(error.status) !== -1 ){ //if not logged navigate to login page
          this.auth.userLogout();
        }else if( error.status === 404 ){ //else other errors navigate to notFoundResource
          this.router.navigate(['/notFoundResources', error.status], {
            queryParams: {
              "Error-Status": error.status
            }
          })
        } else {
          this.router.navigate(['/applicationError', error.status], {
            queryParams: {
              "Error-Status": error.status
            }
          });
        }
        
        const err = error.message || error.statusText;
        return throwError(err);
        
      }
    )
    )
  } 
}
