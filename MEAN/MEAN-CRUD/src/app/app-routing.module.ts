import { EmployeeComponent } from './employee/employee.component';
import { AddOrEditComponent } from './employee/add-or-edit/add-or-edit.component';
import { ListComponent } from './employee/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent, children: [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: ListComponent },
    { path: 'edit/:id', component: AddOrEditComponent },
    { path: 'add', component: AddOrEditComponent },
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
