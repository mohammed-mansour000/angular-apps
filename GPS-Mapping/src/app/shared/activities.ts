import { Activity } from './activity.model'

export const constant_activites: Activity[] = [
    {
        "id" : 1,
        "name" : "Main Bike Trails",
        "date" : new Date('06/01/2021'),
        "distance" :  6.2,
        "comments" : "Nice day, cool temps",
        "gpxData" : "../../assets/gpx/1.gpx"

    },
    {
        "id" : 2,
        "name" : "Indastrial Park",
        "date" : new Date('06/04/2017'),
        "distance" :  1.2,
        "comments" : "Cool and Windy",
        "gpxData" : "../../assets/gpx/2.gpx"

    },
    {
        "id" : 3,
        "name" : "Forest Route",
        "date" : new Date('06/03/2017'),
        "distance" :  7.4,
        "comments" : "Evening Run",
        "gpxData" : "../../assets/gpx/3.gpx"

    },
    {
        "id" : 4,
        "name" : "Lake Shore",
        "date" : new Date('12/27/2016'),
        "distance" :  3.3,
        "comments" : "Morining Run",
        "gpxData" : "../../assets/gpx/4.gpx"

    }
] 