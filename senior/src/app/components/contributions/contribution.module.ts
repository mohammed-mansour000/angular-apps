import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContributionRoutingModule } from './contribution.routing.module';

import { ContributeComponent } from './contribute/contribute.component';
import { ContributionAboutComponent } from './contribution-about/contribution-about.component';
import { ContributionMatchesComponent } from './contribution-matches/contribution-matches.component';
import { ContributionComponent } from './contribution/contribution.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { EditContributionComponent } from './edit-contribution/edit-contribution.component';

@NgModule({
  declarations: [
    ContributeComponent,
    ContributionAboutComponent,
    ContributionMatchesComponent,
    ContributionComponent,
    ContributionsComponent,
    EditContributionComponent
  ],
  imports: [
    CommonModule,
    ContributionRoutingModule,
    NgbModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContributionModule { }
