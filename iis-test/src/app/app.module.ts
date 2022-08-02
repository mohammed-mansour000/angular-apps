import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

//////
import {MatInputModule} from '@angular/material/input';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {MatSidenavModule} from '@angular/material/sidenav';
//////


import{MatTabsModule} from "@angular/material/tabs";

import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { TableComponent } from './components/table/table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatTableModule } from '@angular/material/table'  
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SidebarComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatInputModule,
    AppRoutingModule,
    CommonModule,
    MatTreeModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatChipsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
