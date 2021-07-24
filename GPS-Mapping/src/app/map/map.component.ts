import { Activity } from './../shared/activity.model';
import { ActivityService } from './../service/activity.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private router: ActivatedRoute, private activityService: ActivityService) { }

  id = 0;

  activity: any;
  activityName: string;
  activityComments: string;
  activityDate: Date;
  activityDistance: number;
  gpx: any;

  ngOnInit(): void {
    this.activity = this.activityService.getActivity(
      +this.router.snapshot.params['id']);

      this.activityService.plotActivity(+this.router.snapshot.params['id']);
      this.activityName = this.activity.name;
      this.activityComments = this.activity.comments;
      this.activityDistance = this.activity.distance;
      this.activityDate = this.activity.date;
      this.gpx = this.activity.gpxData;

  }

}
