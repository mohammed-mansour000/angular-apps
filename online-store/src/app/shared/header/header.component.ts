import { BackendService } from './../../services/backend.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() pageTitle: string;
  @Input() iconTitle: string;
  @Input() helpTitle: string;

  socialData;
  counter: number = 0;
  userStatusColor: any = 'warn';

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.socialData = this.backendService.getSocial();
    this.counter = this.backendService.getCartTotal();
    this.userStatusColor = this.backendService.getUserStatus().subscribe(res =>{
      this.userStatusColor = res ? "primary": "warn";
    });
  }

}
