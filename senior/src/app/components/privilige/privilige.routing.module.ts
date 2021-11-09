import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPriviligeComponent } from './add-privilige/add-privilige.component';
import { EditPriviligeComponent } from './edit-privilige/edit-privilige.component';
import { PriviligesComponent } from './priviliges/priviliges.component';


const routes: Routes = [
    {path: '', component: PriviligesComponent},
    {path: 'add-privilige', component: AddPriviligeComponent},
    {path: ':privilegeId/edit', component: EditPriviligeComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class PriviligeRoutingModule {}