import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isLoaded = false;
  constructor( private cdref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  public ngAfterViewInit() {
    // Do the logic here
    this.isLoaded = true;
    this.cdref.detectChanges();
  }
}
