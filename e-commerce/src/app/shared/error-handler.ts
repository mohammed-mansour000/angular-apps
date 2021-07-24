import { HttpErrorResponse } from "@angular/common/http";

export class ErrorHandler{
    handleError(errorResponse: HttpErrorResponse){
        if(errorResponse.error instanceof ErrorEvent){
            console.log('Client Side Error: '+ errorResponse.error.message);
            console.log('Server Side Error: '+ errorResponse);
        }else{
            return alert('please refresh the site');
        }
    }
}