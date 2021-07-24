import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from './../shared/payment-detail.model';
import { PaymentDetailService } from './../shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getPaymentDetails();
  }

  populateForm(selectedRecord: PaymentDetail){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number){
    console.log(id);
    if(confirm("Are You Sure?")){
      this.service.deletePaymentDetail(id).subscribe(
        res =>{
          this.service.getPaymentDetails();
          this.toastr.warning("Deleted Successfully", "PaymentDetail Register");
        },
        err =>{
          console.log(err);
          this.toastr.error(err.message, "PaymentDetail Register");
        }
      );
    }
  }
}
