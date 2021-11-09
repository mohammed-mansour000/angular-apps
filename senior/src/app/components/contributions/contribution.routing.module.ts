import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContributeComponent } from './contribute/contribute.component';
import { ContributionAboutComponent } from './contribution-about/contribution-about.component';
import { ContributionMatchesComponent } from './contribution-matches/contribution-matches.component';
import { ContributionComponent } from './contribution/contribution.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { EditContributionComponent } from './edit-contribution/edit-contribution.component';


const routes: Routes = [
    {path: '', component: ContributionsComponent},
    {path: 'contribute', component: ContributeComponent },
    { path: ':contId/edit', component: EditContributionComponent },
    {path: ':contId',
      component: ContributionComponent,
      children: [
        { path: '', redirectTo: 'about', pathMatch: 'full' },
        { path: 'about', component: ContributionAboutComponent },
        { path: 'matches', component: ContributionMatchesComponent },
      ],
    },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContributionRoutingModule {}
