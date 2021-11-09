import { EditRoleComponent } from './edit-role/edit-role.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { RolesComponent } from './roles/roles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path: '', component: RolesComponent},
    {path: 'add', component: AddRoleComponent},
    {path: ':roleId/edit', component: EditRoleComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class RoleRoutingModule {}