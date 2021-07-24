import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Activity } from '../shared/activity.model';
import { constant_activites } from '../shared/activities';

const apiToken = environment.MAPBOX_API_KEY;
declare var omnivore:any;
declare var L:any;

const defaultCoords: number[] = [40,-80];
const defaultZoom: number = 8;

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor() { }

  getActivities(): Activity[]{  //get all activities from activities class
    return constant_activites.slice(0);
  }

  getTotalActivities(listActivities: Activity[]): number{
    return listActivities.length;
  }

  getTotalDistance(listActivities: Activity[]): number{
    var total = 0;
    for(var i=0; i < listActivities.length; i++ ){
      total += listActivities[i].distance;
    }
    return total;
  }

  getFirstDate(listActivities: Activity[]): Date{ //get the start date
    var earliestDate = new Date('12/12/9999');
    for(var i=0; i < listActivities.length; i++ ){
      if(listActivities[i].date < earliestDate){
        earliestDate = listActivities[i].date;
      }
    }
    return earliestDate;
  }

  getActivity(id: number){ //get an activity of a certain id
    var activities = this.getActivities();
    return activities.find(el=>{
      return el.id == id;
    })
  }


  plotActivity(id: number){   //here where we'll plot our map
    var myStyle = {
      "color": "#3949AB",
      "weight": 5,
      "opacity": 0.95
    };

    var map = L.map('map').setView(defaultCoords, defaultZoom);

    map.maxZoom = 100;

    L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.dark',
      accessToken: apiToken
    }).addTo(map);

    var customLayer = L.geoJson(null, {
      style: myStyle
    });

    var gpxLayer = omnivore.gpx(constant_activites.find(run => run.id == id).gpxData, null, customLayer)
    .on('ready', function() {
      map.fitBounds(gpxLayer.getBounds());
    }).addTo(map);
  }
}
