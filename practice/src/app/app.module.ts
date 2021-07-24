import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './article/article.component';
import { TeamComponent } from './team/team.component';
import { DirectorComponent } from './director/director.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    TeamComponent,
    DirectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
