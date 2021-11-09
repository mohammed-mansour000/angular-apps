import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComponent } from './create/create.component';
import { EditNeedComponent } from './edit-need/edit-need.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { NeedAboutComponent } from './need-about/need-about.component';
import { NeedAddComponent } from './need-add/need-add.component';
import { NeedMatchesComponent } from './need-matches/need-matches.component';
import { NeedComponent } from './need/need.component';
import { NeedsComponent } from './needs/needs.component';
import { ProjectAboutComponent } from './project-about/project-about.component';
import { ProjectNeedsComponent } from './project-needs/project-needs.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectRoutingModule } from './project.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CreateComponent,
    EditNeedComponent,
    EditProjectComponent,
    NeedAboutComponent,
    NeedAddComponent,
    NeedMatchesComponent,
    NeedComponent,
    NeedsComponent,
    ProjectAboutComponent,
    ProjectNeedsComponent,
    ProjectComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NgbModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProjectModule { }
