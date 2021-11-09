import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'create', component: CreateComponent },
  { path: ':id/edit', component: EditProjectComponent },
  {
    path: ':id',
    component: ProjectComponent,
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'about', component: ProjectAboutComponent },
      {
        path: 'needs',
        component: ProjectNeedsComponent,
        children: [
          { path: '', component: NeedsComponent },
          { path: 'add', component: NeedAddComponent },
          { path: ':needId/edit', component: EditNeedComponent },
          {
            path: ':needId',
            component: NeedComponent,
            children: [
              { path: '', redirectTo: 'about', pathMatch: 'full' },
              { path: 'about', component: NeedAboutComponent },
              { path: 'matches', component: NeedMatchesComponent },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
