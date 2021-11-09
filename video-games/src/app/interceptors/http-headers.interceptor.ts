import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HttpHeadersInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            // setHeaders: {
            //     'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            //     'x-rapidapi-key': '8c8af6050emshc79759eeed24675p19f699jsn3ab9d7ff66c5'
            // },
            setParams: {
                key: '8028014774374dd2a048cde45e2898f2'
            }
        });
        
        return next.handle(req);
    }
}