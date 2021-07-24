import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  url: string = "https://localhost:5001/api/PaymentDetails";
  formData: PaymentDetail = new PaymentDetail();
  list: PaymentDetail[];

  constructor(private apiCaller: HttpClient) {  }

  addPaymentDetail(){
    return this.apiCaller.post(this.url, this.formData);
  }

  updatePaymentDetail(){
    return this.apiCaller.put(this.url + "/" + this.formData.paymentDetailId, this.formData);
  }

  deletePaymentDetail(id: number){
    return this.apiCaller.delete(this.url + "/" + id);
  }

  getPaymentDetails(){
    //return this.apiCaller.get(this.url);
    this.apiCaller.get(this.url)
      .toPromise()
      .then(res => {console.log(res); this.list = res as PaymentDetail[]});
  }
}
