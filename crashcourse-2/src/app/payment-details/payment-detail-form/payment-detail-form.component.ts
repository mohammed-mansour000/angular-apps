import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service: PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(this.service.formData.paymentDetailId == 0){
      this.insertRecord(form);
    }else{
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm){
    console.log(form.value);
    this.service.addPaymentDetail().subscribe(res => {
      console.log(res)
      this.resetForm(form);
      this.service.getPaymentDetails();
      this.toastr.success("Submitted Successfully", "PaymentDetail Register");
    }, err => {
      alert(err.message)
    })
  }

  updateRecord(form: NgForm){
    this.service.updatePaymentDetail().subscribe(res => {
      console.log(res)
      this.resetForm(form);
      this.service.getPaymentDetails();
      this.toastr.info("Updated Successfully", "PaymentDetail Register");
    }, err => {
      alert(err.message)
    })
  }

  resetForm(form: NgForm){
    form.form.reset();
    //reset the value of formData presented in service file
    this.service.formData = new PaymentDetail();
  }
}
