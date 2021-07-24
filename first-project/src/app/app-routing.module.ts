import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRestaComponent } from "./add-resta/add-resta.component"; 
import { ListRestaComponent } from "./list-resta/list-resta.component"; 
import { UpdateRestaComponent } from "./update-resta/update-resta.component"; 
import { LoginComponent } from "./login/login.component"; 
import { RegisterComponent } from "./register/register.component"; 



const routes: Routes = [
  {
    component:AddRestaComponent,
    path:"add"
  },
  {
    component:ListRestaComponent,
    path:""
  },
  {
    component:UpdateRestaComponent,
    path:"update/:id" //this id will be used in GET
  },
  {
    component:LoginComponent,
    path:"login"
  },
  {
    component:RegisterComponent,
    path:"register"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
