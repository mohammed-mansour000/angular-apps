import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoleRoutingModule } from './role.routing.module';
import { RolesComponent } from './roles/roles.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';




@NgModule({
  declarations: [
    RolesComponent,
    AddRoleComponent,
    EditRoleComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RoleModule { }
