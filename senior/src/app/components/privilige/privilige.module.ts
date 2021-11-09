import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EditPriviligeComponent } from './edit-privilige/edit-privilige.component';
import { PriviligesComponent } from './priviliges/priviliges.component';
import { AddPriviligeComponent } from './add-privilige/add-privilige.component';
import { PriviligeRoutingModule } from './privilige.routing.module';


@NgModule({
  declarations: [
    PriviligesComponent,
    AddPriviligeComponent,
    EditPriviligeComponent
  ],
  imports: [
    CommonModule,
    PriviligeRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PriviligeModule { }
