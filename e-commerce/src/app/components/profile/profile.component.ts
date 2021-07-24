import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile!: Profile;
  modalRef!: BsModalRef;

  constructor(
    private authService:AuthService,
    private modalService: BsModalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { 
      if(activatedRoute.snapshot.data.profile){
        this.profile = activatedRoute.snapshot.data.profile;
        this.updateObject.firstname = activatedRoute.snapshot.data.profile.firstname;
        this.updateObject.lastname = activatedRoute.snapshot.data.profile.lastname;
        this.updateObject.age = activatedRoute.snapshot.data.profile.age;
        this.updateObject.email = activatedRoute.snapshot.data.profile.email;
        this.updateObject.gender = activatedRoute.snapshot.data.profile.gender;
        this.updateObject.phone = activatedRoute.snapshot.data.profile.phone;
        this.updateObject.country = activatedRoute.snapshot.data.profile.country;
        this.updateObject.city = activatedRoute.snapshot.data.profile.city;
        this.updateObject.address = activatedRoute.snapshot.data.profile.address;
      }
    }

  updateObject = {
    firstname: null,
    lastname: null,
    email: null,
    gender: null,
    age: null,
    phone: null,
    country: null,
    city: null,
    address: null,
  }

  ngOnInit(): void {
  }


  updateProfile(){
    this.authService.updateProfile(this.updateObject).subscribe(res=>{
      this.profile = res;
      this.authService.username = `${res.firstname} ${res.lastname}`;
    })
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  hide(){
    this.modalRef.hide();
  }

}
