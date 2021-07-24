import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandler } from 'src/app/shared/error-handler';
import { Invoice } from 'src/app/models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoiceUrl = `http://localhost:3000/invoices`

  constructor(private http: HttpClient) { }

  private errorHandler: ErrorHandler = new ErrorHandler();



  getUserInvoice(id: number): Observable<Invoice>{
    try {
      return this.http.get<Invoice>(`${this.invoiceUrl}/${id}`);
    } catch (error) {
      //this.errorHandler.handleError(error);
      throw(error);
    }
  }
}
