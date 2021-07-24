import { ActivityService } from './../service/activity.service';
import { Component, OnInit } from '@angular/core';

import { Activity } from '../shared/activity.model';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities: Activity[];
  totalActivities: number;
  totalDistance: number; 
  firstDate: Date;

  constructor(private activityService : ActivityService) { }

  ngOnInit(): void {
    this.activities = this.activityService.getActivities();
    this.totalDistance = this.activityService.getTotalDistance(this.activities);
    this.totalActivities = this.activityService.getTotalActivities(this.activities);
    this.firstDate = this.activityService.getFirstDate(this.activities);
    console.log(this.activities);
  }

}
