import { MapComponent } from './map/map.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "runs", component: ActivityListComponent },
  { path: "runs/:id", component: MapComponent },
  { path: "", redirectTo: "runs", pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
